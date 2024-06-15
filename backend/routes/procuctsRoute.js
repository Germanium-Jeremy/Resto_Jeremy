// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const { getProducts, getCertainProd, addProduct } = require("../controllers/productController");

// MAKING ROUTES
router.get("/productsAll", getProducts);
router.get("/getCertainProd", getCertainProd);
router.post("/addProduct", addProduct);

module.exports = router;
