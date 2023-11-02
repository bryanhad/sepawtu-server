"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const products = require('../data/products.json')
        const productSeed = products.map(product => {
            const productName = product.name.toLowerCase().split(' ')
            const slug = productName.length >= 2
                ? productName.join('-') : productName[0]

            return {
                ...product,
                slug,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
        await queryInterface.bulkInsert('Products', productSeed)
    },

    async down(queryInterface, Sequelize) {
        queryInterface.bulkDelete('Products')
    },
}
