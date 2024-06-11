const userModel = require("../models/UserModels");
const { authSchema } = require("../validation/v-schema")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    const token = jwt.sign({ id: newUser._id }, "your_jwt_secret");

    res.status(201).send({ user: newUser, token: token });
  } catch (error) {
     if (error.isJoi === true) return res.status(400).send(error.details[0].message)
    console.log(error.message);
    return res.status(500).send("Internal Server Error At Backend");
  }
};

const getAllUsers = async (req, res) => {
     try {
          const allUsers = await userModel.find()
          if (!allUsers) return res.status(200).send("No Users")
          return res.status(201).send(allUsers)
     } catch (error) {
          if (error.isJoi === true) return res.status(400).send(error.details[0].message)
          console.log(error.message);
          return res.status(500).send("Internal Server Error At Backend");
     }
}

module.exports = { registerUser, getAllUsers };
