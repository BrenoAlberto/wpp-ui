'use strict'

const models = require('../../models/db');

exports.savePhoto = async (path, MessageId) => {
    await models.Photo.create({
        path,
        MessageId
    })
}

exports.deletePhoto = async(MessageId) => {
    await models.Photo.destroy({
        where: {
            MessageId
        }
    })
}
