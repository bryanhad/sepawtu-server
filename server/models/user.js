"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Product, { foreignKey: "authorId" })
        }
    }
    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Username field is required",
                    },
                    notEmpty: {
                        msg: "Username field is required",
                    },
                    isValidLength(value) {
                        const MIN = 4
                        const MAX = 15
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
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: "The email address you entered is associated with an existing account",
                },
                validate: {
                    notNull: {
                        msg: "Email field is required",
                    },
                    notEmpty: {
                        msg: "Email field is required",
                    },
                    isEmail: {
                        msg: "Please use correct email format",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Password field is required",
                    },
                    notEmpty: {
                        msg: "Password field is required",
                    },
                    isValidLength(value) {
                        const MIN = 5
                        const MAX = 20
                        if (value.length < MIN)
                            throw new Error(
                                `Password must be atleast ${MIN} characters long`
                            )
                        if (value.length > MAX)
                            throw new Error(
                                `Password cannot be more than ${MIN} characters long`
                            )
                    },
                },
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Role field is required",
                    },
                    notEmpty: {
                        msg: "Role field is required",
                    },
                    isValid(value) {
                        const validRoles = ["user", "admin"]
                        if (!validRoles.includes(value))
                            throw new Error(
                                `Role can only be the following: ${validRoles.join(
                                    " | "
                                )}`
                            )
                    },
                },
            },
            phoneNumber: DataTypes.STRING,
            address: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    )
    return User
}
