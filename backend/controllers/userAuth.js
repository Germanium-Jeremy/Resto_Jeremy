// REQUIRE PACKAGES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// REQUIRE OTHER FUNCTIONS
const userModel = require("../models/UserModels");
const { authSchema, loginSchema } = require("../validation/v-schema");

// REQUIRE DOTENV VARIABLES
const jwt_secret = process.env.JWT_SECRET;

// EMAIL FIRST SIGNUP
const emailSignup = async (req, res) => {
  try {
    let email = req.body.email;
    if (email == null) return res.status(400).send("No Email Provided");
    console.log(email)

    let user = await userModel.findOne({ email: email });
    if (user) return res.status(400).send({message: "Email already exists"})
    console.log("Email doesn't exists");

    return res.status(200).send(email);
  } catch (error) {
    if (error.isJoi === true) return res.status(400).send(error.details[0].message);
    console.log("Error", error.message);
    return res.status(500).send("Internal Server Error At Backend");
  }
};

const emailLogin = async (req, res) => {
  try {
    let email = req.body.email;
    if (email == '') return res.status(400).send({message: "No Email provided"});
    console.log(email)

    let user = await userModel.findOne({ email: email });
    if (!user) return res.status(400).send({message: "Wrong email"})
    
    return res.status(200).send(email)
  } catch (error) {
    if (error.isJoi === true) return res.status(400).send(error.details[0].message);
    console.log("Error", error.message);
    return res.status(500).send("Internal Server Error At Backend");
  }
};

// REGISTER USER FUNCTION
const registerUser = async (req, res) => {
  try {
    let response = null
    try {
      // response = await authSchema.validateAsync(req.body);
      response = req.body;
    } catch (error) {
      console.log(error.message)
    }
    console.log(response);

    const salt = await bcrypt.genSalt(10);
    response.password = await bcrypt.hash(response.password, salt);

    const newUser = new userModel(response);
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, jwt_secret);

    res.status(201).send({
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
    // const response = await loginSchema.validateAsync(req.body);
    const response = await req.body
    console.log(response);

    let user = await userModel.findOne({ email: response.email });

    const passMatch = await bcrypt.compare(response.password, user.password);
    if (!passMatch) return res.status(400).send("Password doesn't match");

    const token = jwt.sign({ id: user._id }, jwt_secret);
    res
      .status(200)
      .send({ user: user, token: token, message: "Login Successfully" });
  } catch (error) {
    if (error.isJoi === true)
      // return res.status(400).send(error.details[0].message);
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
module.exports = { registerUser, emailSignup, getAllUsers, signinUser, emailLogin };
