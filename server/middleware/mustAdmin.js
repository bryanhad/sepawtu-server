async function mustAdmin(req, res, next) {
    try {
        if (req.user.role !== 'admin') throw {name: "Forbidden"}
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = mustAdmin