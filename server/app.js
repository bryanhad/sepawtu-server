require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { routes } = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}, url: http://localhost:${PORT}`)
})