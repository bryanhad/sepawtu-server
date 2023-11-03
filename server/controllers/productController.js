const getMaxMinPrice = require("../helpers/getMaxMinPrice")
const getPagination = require("../helpers/getPagination")
const { Product, Style, User, Image } = require("../models")
const { Op } = require("sequelize")

module.exports = class ProductController {
    static async getAll_ForAdmin(req, res, next) {
        const { page, size, gender, style, pmax, pmin, slug, images } = req.query

        const { maxPrice, minPrice } = getMaxMinPrice(pmax, pmin)
        const { offset, limit, pageQuery } = getPagination(page, size)

        const QUERY_OPTION = {
            limit,
            offset,
            include: [
                {
                    model: Style,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "mainImg"],
                    },
                },
                {
                    model: User,
                    attributes: ["id", "username", "email", "role", "profilePicture"]
                },
            ],
            order: [["id", "ASC"]],
        }
        if (images)
            QUERY_OPTION.include.push({
                model: Image,
                attributes: { exclude: ["createdAt", "updatedAt"] },
            })

        if (gender || maxPrice || minPrice || style || slug)
            QUERY_OPTION.where = {}

        if (gender) QUERY_OPTION.where.gender = { [Op.iLike]: `${gender}` }
        if (maxPrice && minPrice) {
            QUERY_OPTION.where.price = { [Op.between]: [minPrice, maxPrice] }
        } else {
            if (maxPrice) QUERY_OPTION.where.price = { [Op.lte]: maxPrice }
            if (minPrice) QUERY_OPTION.where.price = { [Op.gte]: minPrice }
        }
        if (style) QUERY_OPTION.where.styleId = style
        if (slug) QUERY_OPTION.where.slug = slug

        try {
            const { count, rows } = await Product.findAndCountAll(QUERY_OPTION)

            const totalPages = limit >= count ? 1 : Math.ceil(count / limit)

            res.status(200).json({
                totalItems: count,
                currentPage: pageQuery,
                totalPages,
                data: rows,
            })
        } catch (err) {
            next(err)
        }
    }
    static async getAll_ForUsers(req, res, next) {
        const { page, size, gender, style, pmax, pmin, slug, images } =
            req.query

        const { maxPrice, minPrice } = getMaxMinPrice(pmax, pmin)
        const { offset, limit, pageQuery } = getPagination(page, size)

        const QUERY_OPTION = {
            limit,
            offset,
            include: [
                {
                    model: Style,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "mainImg"],
                    },
                },
            ],
            order: [["id", "ASC"]],
        }
        if (images)
            QUERY_OPTION.include.push({
                model: Image,
                attributes: { exclude: ["createdAt", "updatedAt"] },
            })

        if (gender || maxPrice || minPrice || style || slug)
            QUERY_OPTION.where = {}

        if (gender) QUERY_OPTION.where.gender = { [Op.iLike]: `${gender}` }
        if (maxPrice && minPrice) {
            QUERY_OPTION.where.price = { [Op.between]: [minPrice, maxPrice] }
        } else {
            if (maxPrice) QUERY_OPTION.where.price = { [Op.lte]: maxPrice }
            if (minPrice) QUERY_OPTION.where.price = { [Op.gte]: minPrice }
        }
        if (style) QUERY_OPTION.where.styleId = style
        if (slug) QUERY_OPTION.where.slug = slug

        try {
            const { count, rows } = await Product.findAndCountAll(QUERY_OPTION)

            const totalPages = limit >= count ? 1 : Math.ceil(count / limit)

            res.status(200).json({
                totalItems: count,
                currentPage: pageQuery,
                totalPages,
                data: rows,
            })
        } catch (err) {
            next(err)
        }
    }
    static async createNew(req, res, next) {
        try {
            const newProduct = await Product.create({
                ...req.body,
                authorId: req.user.id,
            })
            res.status(201).json({
                message: `Succeeded add new Lodging '${newProduct.name}'`,
                data: newProduct,
            })
        } catch (err) {
            next(err)
        }
    }
    static async getById(req, res, next) {
        const { id } = req.params
        try {
            const queriedProduct = await Product.findOne({
                where: { id },
                include: [
                    { model: User, attributes: { exclude: ["password"] } },
                    { model: Type, attributes: ["name"] },
                ],
            })
            if (!queriedProduct)
                throw {
                    name: "NotFound",
                    msg: `Lodging with id '${id}' is not found`,
                }

            res.status(200).json(queriedProduct)
        } catch (err) {
            next(err)
        }
    }
}
