"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Style extends Model {
        static associate(models) {
            this.hasMany(models.Product, {foreignKey: 'styleId'})
        }
    }
    Style.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Style name is required",
                    },
                    notEmpty: {
                        msg: "Style name is required",
                    },
                },
            },
            mainImg: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Style thumbnail is required",
                    },
                    notEmpty: {
                        msg: "Style thumbnail is required",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Style",
        }
    )
    return Style
}
