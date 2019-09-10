'use strict'

const MessageService = require('../message/message.service');

exports.sendMessage = async (req, res) => {
    const pipes = req.body.pipes;

    try {
        await MessageService.saveMessageInfo(pipes);
        await MessageService.sendMessage(pipes);
        res.json({success: 'Ok'})
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}