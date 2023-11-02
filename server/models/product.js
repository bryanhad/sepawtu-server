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
                        if (value.length < MIN)
                            throw new Error(
                                `Username must be atleast ${MIN} characters long`
                            )
                        if (value.length > MAX)
                            throw new Error(
                                `Username cannot be more than ${MIN} characters long`
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
    Product.beforeCreate((product) => {
        const productName = product.name.toLowerCase().split(" ")
        const slug =
            productName.length >= 2 ? productName.join("-") : productName[0]

        product.slug = slug
    })
    return Product
}
