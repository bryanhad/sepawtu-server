"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate(models) {
            this.belongsTo(models.Product, { foreignKey: "productId" })
        }
    }
    Image.init(
        {
            productId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Products",
                    key: "id"
                }
            },
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
