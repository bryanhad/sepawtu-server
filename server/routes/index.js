const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.status(200).json({message: 'Hello brawkk'}))

router.post('/admin/login')
router.post('/admin/register')

module.exports = {routes: router}