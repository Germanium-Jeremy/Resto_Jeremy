const express = require("express");
const router = express.Router();

const { registerUser, getAllUsers } = require("../controllers/userAuth");

router.post("/signup", registerUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
