// REQUIRE PACKAGES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// REQUIRE OTHER FUNCTIONS
const userModel = require("../models/UserModels");
const { authSchema, loginSchema } = require("../validation/v-schema");

// REQUIRE DOTENV VARIABLES
const jwt_secret = process.env.JWT_SECRET;

// REGISTER USER FUNCTION
const registerUser = async (req, res) => {
  try {
    const response = await authSchema.validateAsync(req.body);
    console.log(response);

    let user = await userModel.findOne({ email: response.email });
    if (user)
      return res.status(400).send(`User with ${response.email} already exists`);

    const salt = await bcrypt.genSalt(10);
    response.password = await bcrypt.hash(response.password, salt);

    const newUser = new userModel(response);
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, jwt_secret);

    res
      .status(201)
      .send({
        user: newUser,
        token: token,
        message: "registration successfully",
      });
  } catch (error) {
    if (error.isJoi === true)
      return res.status(400).send(error.details[0].message);
    console.log(error.message);
    return res.status(500).send("Internal Server Error At Backend");
  }
};

// LOGIN USER FUNCTION
const signinUser = async (req, res) => {
  try {
    const response = await loginSchema.validateAsync(req.body);
    console.log(response);

    let user = await userModel.findOne({ email: response.email });
    if (!user)
      return res.status(400).send(`Wrong Email, Please signup If You haven't`);

    const passMatch = await bcrypt.compare(response.password, user.password);
    if (!passMatch) return res.status(400).send("Password doesn't match");

    const token = jwt.sign({ id: user._id }, jwt_secret);
    res
      .status(200)
      .send({ user: user, token: token, message: "Login Successfully" });
  } catch (error) {
    if (error.isJoi === true)
      return res.status(400).send(error.details[0].message);
    console.log(error.message);
    return res.status(500).send("Internal Server Error, Please Try Again");
  }
};

// ALL USERS FUNCTION
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    if (!allUsers) return res.status(200).send("No Users");
    return res.status(201).send(allUsers);
  } catch (error) {
    if (error.isJoi === true)
      return res.status(400).send(error.details[0].message);
    console.log(error.message);
    return res.status(500).send("Internal Server Error, Please Try Again");
  }
};

// EXPORTING FUNCTIONS
module.exports = { registerUser, getAllUsers, signinUser };
