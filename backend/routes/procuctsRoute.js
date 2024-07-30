// REQUIRING PACKAGES
const express = require("express");
const app = express()
const router = express.Router();


// REQUIRING CONTROLLERS
const { getProducts, getCertainProd, addProduct } = require("../controllers/productController");
const localProducts = require('../uploads/index')

// MAKING ROUTES
router.get("/productsAll", getProducts);
router.get("/getCertainProd", getCertainProd);
router.post("/addProduct", addProduct);
router.get("/localProducts", localProducts);


module.exports = router;
