const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: false, minlength: 10, maxlength: 50, unique: false },
    username: { type: String, required: false, minlength: 5, maxlength: 30 },
    dob: { type: Date, required: false, },
    password: { type: String, required: false, minlength: 6 },
    phone: { type: Number, required: false },
    location: { type: String, required: false, minlength: 5, maxlength: 50 },
  }, { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
