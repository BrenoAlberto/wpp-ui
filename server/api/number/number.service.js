'use strict'

const models = require('../../models/db');

exports.saveNumber = async (number, MessageId) => {
    await models.Number.create({
        number,
        MessageId
    })
}

exports.deleteNumber = async(MessageId) => {
    await models.Number.destroy({
        where: {
            MessageId
        }
    })
}
