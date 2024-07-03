// REQUIRING PACKAGES
const express = require("express");
const router = express.Router();

// REQUIRING CONTROLLERS
const {
  registerUser,
  emailSignup,
  getAllUsers,
  signinUser,
  emailLogin,
} = require("../controllers/userAuth");

// MAKING ROUTES
router.post("/signup", registerUser);
router.post("/login", signinUser);
router.post("/email", emailSignup);
router.post("/emailLogin", emailLogin);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
