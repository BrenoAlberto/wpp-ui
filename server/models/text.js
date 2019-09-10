'use strict'

module.exports = (sequelize, DataTypes) => {
    const Text = sequelize.define('Text', {
        text: {
            type: DataTypes.STRING
        }
    });

    Text.associate = (models) => {
        models.Text.belongsTo(models.Text);
    };

    return Text;
};