const { Style } = require("../models")

module.exports = class StyleController {
    static async getAll(req, res, next) {
        try {
            const styles = await Style.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"] },
            })
            res.status(200).json(styles)
        } catch (err) {
            next(err)
        }
    }
    static async getAll_ForAdmin(req, res, next) {
        try {
            const styles = await Style.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", 'mainImg'] },
            })
            res.status(200).json(styles)
        } catch (err) {
            next(err)
        }
    }
}
