const { required } = require("joi");
const mongoose = require("mongoose");
const NotificationSchema = new mongoose.Schema(
  {
     userId: { type: String, required: true},
     productId: { type: String, required: false },
     heading: { type: String, required: true },
     message: { type: String, required: true },
     longMessage: { type: String, required: false },
  }, { timestamps: true }
);

const NotificationModel = mongoose.model("Notification", NotificationSchema);

module.exports = NotificationModel;
