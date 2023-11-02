const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router()

router.get('/', (req, res) => res.status(200).json({message: 'Hello brawkk'}))

router.post('/admin/register', UserController.AdminRegister)
router.post('/admin/login', UserController.AdminLogin)

module.exports = {routes: router}