const getMaxMinPrice = require("../helpers/getMaxMinPrice")
const getPagination = require("../helpers/getPagination")
const { Product, Style, User, Image, sequelize } = require("../models")
const { Op } = require("sequelize")

module.exports = class ProductController {
    static async getAll_ForAdmin(req, res, next) {
        const { page, size, gender, style, pmax, pmin, slug, images, name } =
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
                {
                    model: User,
                    attributes: [
                        "id",
                        "username",
                        "email",
                        "role",
                        "profilePicture",
                    ],
                },
            ],
            order: [["id", "ASC"]],
        }
        if (images)
            QUERY_OPTION.include.push({
                model: Image,
                attributes: { exclude: ["createdAt", "updatedAt"] },
            })

        if (gender || maxPrice || minPrice || style || slug || name)
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
        if (name) QUERY_OPTION.where.name = { [Op.iLike]: `%${name}%` }

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
        const { images, ...productBody } = req.body
        const t = await sequelize.transaction()

        try {
            if (!images || images.length < 2) {
                throw {
                    name: "InsufficientInput",
                    msg: `Product has to have atleast 2 additional images aside from it's thumbnail`,
                }
            }

            const newProduct = await Product.create(
                {
                    ...productBody,
                    authorId: req.user.id,
                },
                { transaction: t }
            )

            await Image.bulkCreate(
                images.map((el) => ({ imgUrl:el.imgUrl, productId: newProduct.id })),
                { transaction: t }
            )

            await t.commit()

            res.status(201).json({
                message: `Succeeded add new Lodging '${newProduct.name}'`,
                data: newProduct,
            })
        } catch (err) {
            await t.rollback()
            next(err)
        }
    }
    static async getById_ForAdmin(req, res, next) {
        const { id } = req.params
        try {
            const queriedProduct = await Product.findOne({
                where: { id },
                attributes: { exlude: ["slug"] },
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "createdAt", "updatedAt"],
                        },
                    },
                    {
                        model: Image,
                        attributes: ["imgUrl"],
                    },
                    {
                        model: Style,
                        attributes: ["name"],
                    },
                ],
            })
            if (!queriedProduct)
                throw {
                    name: "NotFound",
                    msg: `Product with id '${id}' is not found`,
                }

            res.status(200).json(queriedProduct)
        } catch (err) {
            next(err)
        }
    }
    static async deleteById(req, res, next) {
        const { id } = req.params

        try {
            const queriedProduct = await Product.findOne({ where: { id } })

            if (!queriedProduct)
                throw {
                    name: "NotFound",
                    msg: `Product with id '${id}' is not found`,
                }

            await queriedProduct.destroy()

            res.status(200).json({
                message: `Product with name '${queriedProduct.name}' has successfully been deleted`,
                data: queriedProduct,
            })
        } catch (err) {
            next(err)
        }
    }
    static async editById(req, res, next) {
        const { id } = req.params

        try {
            const queriedProduct = await Product.findOne({ where: { id } })
            if (!queriedProduct)
                throw {
                    name: "NotFound",
                    msg: `Lodging with id '${id}' is not found`,
                }

            const productName = req.body.name.toLowerCase().split(" ")
            const slug =
                productName.length >= 2 ? productName.join("-") : productName[0]
            await queriedProduct.update({ ...req.body, slug })

            res.status(200).json({
                message: `Lodging with name '${queriedProduct.name}' has successfully been updated`,
            })
        } catch (err) {
            next(err)
        }
    }
}
