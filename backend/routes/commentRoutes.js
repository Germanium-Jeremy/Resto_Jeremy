// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const { createComment, getComments } = require("../controllers/commentController")

// MAKING ROUTES
router.post("/createComment", createComment)
router.get("/getComments", getComments)

module.exports = router;
