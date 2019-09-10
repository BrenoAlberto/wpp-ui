'use strict'

module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('Photo', {
        path: {
            type: DataTypes.STRING,
            validate: {
                is: /\.(gif|jpe?g|png)$/i
            }
        }
    });

    Photo.associate = (models) => {
        models.Photo.belongsTo(models.Message);
    };

    return Photo;
};