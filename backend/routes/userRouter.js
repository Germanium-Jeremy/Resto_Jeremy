// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const { registerUser, getAllUsers, signinUser } = require("../controllers/userAuth");

// MAKING ROUTES
router.post("/signup", registerUser);
router.post("/login", signinUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
