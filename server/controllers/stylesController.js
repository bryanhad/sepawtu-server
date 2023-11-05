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
                attributes: { exclude: ["createdAt", "updatedAt", "mainImg"] },
            })
            res.status(200).json(styles)
        } catch (err) {
            next(err)
        }
    }
    static async deleteById(req, res, next) {
        const { id } = req.params

        try {
            const queriedStyle = await Style.findOne({ where: { id } })

            if (!queriedStyle)
                throw {
                    name: "NotFound",
                    msg: `Style with id '${id}' is not found`,
                }

            await queriedStyle.destroy()

            res.status(200).json({
                message: `Style with name '${queriedStyle.name}' has successfully been deleted`,
                data: queriedStyle,
            })
        } catch (err) {
            next(err)
        }
    }
    static async createNew(req, res, next) {
        try {
            const newStyle = await Style.create(req.body)

            res.status(201).json({
                message: `Succeeded add new Style '${newStyle.name}'`,
                data: newStyle,
            })
        } catch (err) {
            next(err)
        }
    }
}
