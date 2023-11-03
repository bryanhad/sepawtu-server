"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: "authorId" })
            this.belongsTo(models.Style, { foreignKey: "styleId" })
            this.hasMany(models.Image, { foreignKey: "productId" })
        }
    }
    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product name is required",
                    },
                    notEmpty: {
                        msg: "Product name is required",
                    },
                },
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product slug is required",
                    },
                    notEmpty: {
                        msg: "Product slug is required",
                    },
                },
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product description is required",
                    },
                    notEmpty: {
                        msg: "Product description is required",
                    },
                },
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product price is required",
                    },
                    notEmpty: {
                        msg: "Product price is required",
                    },
                    isValidPrice(value) {
                        const MIN = 10_000
                        const MAX = 300_000_000
                        if (value < MIN)
                            throw new Error(
                                `Product's price must be atleast ${MIN}`
                            )
                        if (value > MAX)
                            throw new Error(
                                `Product's price cannot be more than ${MAX}`
                            )
                    },
                },
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product gender field is required",
                    },
                    notEmpty: {
                        msg: "Product gender field is required",
                    },
                    isValid(value) {
                        const validGenders = ["male", "female", "kids"]
                        if (!validGenders.includes(value))
                            throw new Error(
                                `Gender can only be the following: ${validGenders.join(
                                    " | "
                                )}`
                            )
                    },
                },
            },
            mainImg: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product thumbnail is required",
                    },
                    notEmpty: {
                        msg: "Product thumbnail is required",
                    },
                },
            },
            styleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Product styleId is required",
                    },
                    notEmpty: {
                        msg: "Product styleId is required",
                    },
                },
                references: {
                    model: "Styles",
                    key: "id",
                },
            },
            authorId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    )
    Product.beforeValidate((product) => {
        const productName = product.name.toLowerCase().split(" ")
        const slug =
            productName.length >= 2 ? productName.join("-") : productName[0]
        product.slug = slug
    })
    return Product
}
