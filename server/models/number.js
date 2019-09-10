'use strict'

module.exports = (sequelize, DataTypes) => {
    const Number = sequelize.define('Number', {
        number: {
            type: DataTypes.STRING,
            validate: {
                is: /^[0-9]{0,14}/
            },
        }
    });

    Number.associate = (models) => {
        models.Number.belongsTo(models.Message)
    };

    return Number;
}