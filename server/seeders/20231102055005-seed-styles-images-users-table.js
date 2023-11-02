"use strict"

const { hashString } = require("../helpers/bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const styles = require("../data/styles.json")
        const images = require("../data/images.json")
        const users = require("../data/users.json")

        const styleSeed = styles.map((style) => {
            return { ...style, createdAt: new Date(), updatedAt: new Date() }
        })

        const imageSeed = images.map((image) => {
            return { ...image, createdAt: new Date(), updatedAt: new Date() }
        })

        const userSeed = users.map(({ password, ...user }) => {
            return {
                ...user,
                password: hashString(password),
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        })
        await queryInterface.bulkInsert("Styles", styleSeed)
        await queryInterface.bulkInsert("Images", imageSeed)
        await queryInterface.bulkInsert("Users", userSeed)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Styles')
        await queryInterface.bulkDelete('Images')
        await queryInterface.bulkDelete('Users')
    },
}
