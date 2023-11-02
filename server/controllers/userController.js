const { User } = require("../models")

export default class UserController {
    static AdminRegister(req, res, next) {
        try {
            const newUser = User.create({...req.body, role: 'admin'})
            // res.send(201).json()
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
