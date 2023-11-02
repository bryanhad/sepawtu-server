"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const images = require("../data/images.json")

        const imageSeed = images.map((image) => {
            return { ...image, createdAt: new Date(), updatedAt: new Date() }
        })
        await queryInterface.bulkInsert("Images", imageSeed)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Images")
    },
}
