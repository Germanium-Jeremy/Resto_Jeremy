const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, minlength: 5, maxlength: 30 },
    email: { type: String, required: true, minlength: 10, maxlength: 50, unique: true },
    password: { type: String, required: true, minlength: 6 },
    age: { type: Number, required: false },
    location: { type: String, required: true, minlength: 5, maxlength: 50 },
  }, { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
