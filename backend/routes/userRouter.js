// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const { registerUser, emailSignup, getAllUsers, signinUser } = require("../controllers/userAuth");

// MAKING ROUTES
router.post("/signup", registerUser);
router.post("/login", signinUser);
router.post("/email", emailSignup);
router.get("/getAllUsers", getAllUsers);


module.exports = router;
