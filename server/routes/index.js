const express = require("express")
const UserController = require("../controllers/userController")
const mustLogin = require("../middleware/mustLogin")
const mustAdmin = require("../middleware/mustAdmin")
const ProductController = require("../controllers/productController")
const StyleController = require("../controllers/stylesController")
const router = express.Router()

router.get("/", (req, res) => res.status(200).json({ message: "Hello brawkk" }))

router.post("/admin/login", UserController.AdminLogin)

router.get("/products", ProductController.getAll_ForUsers)
router.get("/products/:id", ProductController.getById_ForUser)
router.get("/styles", StyleController.getAll)

router.use(mustLogin)

router.get("/user-info", UserController.getInfo)

router.use(mustAdmin)
router.get("/admin/products", ProductController.getAll_ForAdmin)
router.post("/admin/products", ProductController.createNew)
router.delete("/admin/products/:id", ProductController.deleteById)
router.get("/admin/products/:id", ProductController.getById_ForAdmin)
router.put("/admin/products/:id", ProductController.editById)

router.get("/admin/styles", StyleController.getAll_ForAdmin)
router.delete("/admin/styles/:id", StyleController.deleteById)
router.post("/admin/styles", StyleController.createNew)

router.post("/admin/register", UserController.AdminRegister)
router.get("/admin/users", UserController.getAll)

router.get("/admin/must", (req, res) => {
    res.status(200).json({
        message: "You have logged in and you are indeed an admin!",
    })
})

module.exports = { routes: router }
