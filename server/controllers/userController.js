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
                user: newUser,
            })
        } catch (err) {
            next(err)
        }
    }

    static AdminLogin(req, res, next) {
        try {
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController
