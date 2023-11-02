"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate(models) {
            // define association here
        }
    }
    Image.init(
        {
            productId: DataTypes.INTEGER,
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please fill in Image URL",
                    },
                    notEmpty: {
                        msg: "Please fill in Image URL",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Image",
        }
    )
    return Image
}
