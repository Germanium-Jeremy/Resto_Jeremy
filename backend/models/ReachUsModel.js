const mongoose = require("mongoose");
const CommentsSchema = new mongoose.Schema(
  {
     username: { type: String, required: true },
     userEmail: { type: String, required: true },
     comment: { type: String, minlength: 30, required: true },
     toView: { type: Boolean, default: false, required: false},
  }, { timestamps: true }
);

const CommentsModel = mongoose.model("Comments", CommentsSchema);

module.exports = CommentsModel;
