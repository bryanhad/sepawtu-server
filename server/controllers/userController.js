const { checkHash } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")
const { User } = require("../models")

class UserController {
    static async AdminRegister(req, res, next) {
        try {
            const newUser = await User.create({ ...req.body, role: "admin" })
            const jwtToken = generateToken({ id: newUser.id })
            res.status(201).json({
                message: `Welcome to our team ${newUser.username}`,
                access_token: jwtToken,
                user: {
                    id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    role: newUser.role,
                    profilePicture: newUser.profilePicture,
                }
            })
        } catch (err) {
            next(err)
        }
    }

    static async AdminLogin(req, res, next) {
        const { email, password } = req.body
        try {
            if (!email || !password) {
                throw {
                    name: "InsufficientInput",
                    fields: ["email", "password"],
                }
            }

            const queriedUser = await User.findOne({ where: { email } })
            if (!queriedUser) throw { name: "InvalidInput" }

            const isValid = checkHash(password, queriedUser.password)
            if (!isValid) throw { name: "InvalidInput" }

            const jwtToken = generateToken({ id: queriedUser.id })
            res.set("access_token", jwtToken)
            res.status(200).json({
                message: `Welcome ${queriedUser.username}!`,
                access_token: jwtToken,
                user: {
                    id: queriedUser.id,
                    username: queriedUser.username,
                    email: queriedUser.email,
                    role: queriedUser.role,
                    profilePicture: queriedUser.profilePicture,
                }
            })
        } catch (err) {
            next(err)
        }
    }

    static async getInfo(req, res, next) {
        try {
            console.log('MASUK SAMPE SINI GA')
            return res.status(200).json(req.user)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController
