const arrayToFormattedString = require("../helpers/arrayToFormattedString")
const capitalizeWord = require("../helpers/capitalizeWord")

module.exports = function errorHandler(err, req, res, next) {
    switch (err.name) {
        case "SequelizeUniqueConstraintError":
            const errorArr2 = err.errors.map((errObj) => {
                const { path, message } = errObj
                return { inputName: path, message }
            })
            res.status(409).json(errorArr2)
            break
        case "SequelizeValidationError":
            const errorArr = err.errors.map((errObj) => {
                const { path, message } = errObj
                return { inputName: path, message }
            })
            res.status(400).json(errorArr)
            break
        case "NotFound":
            return res
                .status(404)
                .json({ message: err.msg ? err.msg : "Data Not Found" })
        case "InsufficientInput":
            if (err.fields) {
                const formattedString = arrayToFormattedString(err.fields)
                const capitalizedString = capitalizeWord(formattedString)
                return res
                    .status(400)
                    .json({ message: `${capitalizedString} cannot be empty` })
            } else if (err.field) {
                return res
                    .status(400)
                    .json({ message: `${capitalizeWord(err.field)} cannot be empty` })
            } else {
                return res.status(400).json({message: err.msg ? err.msg : 'Insufficient input'})
            }
        case "InvalidInput":
            return res
                .status(401)
                .json({ message: "Invalid email or password" })
        case "JsonWebTokenError":
        case "InvalidToken":
            return res.status(401).json({ message: "Invalid Token" })
        case "Forbidden":
            return res.status(403).json({
                message: err.msg
                    ? err.msg
                    : "You are unauthorized to access this endpoint",
            })
        case "UpdateStatusError": 
            const status = err.body.status
            if (!status) {
                return res.status(400).json({
                    message: "Please specify the new status"
                })
            }
            if (status !== "active" || status !== "inactive" || status !== "archived")
            return res.status(400).json({
                message: `Lodging status can only be "active" / "inactive" / "archived"`
            })
        default:
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
    }
}