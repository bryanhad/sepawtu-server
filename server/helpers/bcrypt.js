const bcrypt = require("bcryptjs")

function hashString(str) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(str, salt)
    return hash
}

function checkHash(str, hash) {
    return bcrypt.compareSync(str, hash)
}

module.exports = {hashString, checkHash}