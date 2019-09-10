const controller = require('./message.controller');
const express = require('express');
const router = express.Router();

router.post('/sendMessage', async (req, res, next) => {
    try {
        await controller.sendMessage(req, res)
    } catch(e) {

    }
});

module.exports = router;