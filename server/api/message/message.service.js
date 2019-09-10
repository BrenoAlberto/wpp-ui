'use strict'

const models = require('../../models/db');
const PhotoService = require('../photo/photo.service');
const TextService = require('../text/text.service');
const NumberService = require('../number/number.service');

const saveMessage = async () => await models.Message.create({});

const deleteMessage = async (id) => {
    await models.Message.destroy({
        where: {
            id
        }
    })
}

exports.sendMessage = async (pipes) => {

}

exports.saveMessageInfo = async (pipes) => {
    try {
        const message = await saveMessage();
        try {
            for (const pipe of pipes) {
                console.log(pipe);
                if (pipe.type === 'number')
                    await NumberService.saveNumber(pipe.value, message.id);
                else if (pipe.type === 'photo')
                    await PhotoService.savePhoto(pipe.value, message.id);
                else if (pipe.type === 'text')
                    await TextService.saveText(pipe.value, message.id);
            }
            return message;
        } catch (e) {
            await deleteMessage(message.id)
        }
    } catch (e) {
        console.error(e);
    }
}