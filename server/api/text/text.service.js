'use strict'

const models = require('../../models/db');

exports.saveText = async (text, MessageId) => {
    await models.Text.create({
        text,
        MessageId
    })
}

exports.deleteText = async(MessageId) => {
    await models.Text.destroy({
        where: {
            MessageId
        }
    })
}
