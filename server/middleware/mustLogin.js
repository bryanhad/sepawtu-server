const { validateToken } = require("../helpers/jwt")
const { User } = require("../models")

async function mustLogin(req, res, next) {
    const { access_token } = req.headers

    try {
        if (!access_token) throw { name: "InvalidToken" }

        const decodedToken = validateToken(access_token)

        const queriedUser = await User.findByPk(decodedToken.id, {
            attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        })
        if (!queriedUser) throw { name: "InvalidToken" }

        req.user = queriedUser //add new 'user' key to req, to be used to other handlers
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = mustLogin
