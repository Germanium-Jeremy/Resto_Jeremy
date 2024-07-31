// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const { getNoifications, createNotification } = require("../controllers/notificationController")

// MAKING ROUTES
router.post("/notifications", getNoifications)
router.post("/createNotification", createNotification)

module.exports = router;
