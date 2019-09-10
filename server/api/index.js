module.exports = (app) => {
    app.use('/api/messages', require('./message/message.routes'));
  }
  