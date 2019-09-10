'use strict'

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message');

    Message.associate = (models) => {
        models.Message.hasMany(models.Number, {
            onDelete: 'cascade'
        });
        models.Message.hasMany(models.Photo, {
            onDelete: 'cascade'
        });
        models.Message.hasMany(models.Text, {
            onDelete: 'cascade'
        });
    }

    return Message;
}