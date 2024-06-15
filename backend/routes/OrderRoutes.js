// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const { getOrders, orderProduct, getCertainOrder } = require("../controllers/orderController")

// MAKING ROUTES
router.get("/getOrders", getOrders);
router.post("/orderProduct", orderProduct);
router.post("/getCertainOrder", getCertainOrder);

module.exports = router;
