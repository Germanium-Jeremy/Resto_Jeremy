const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    productsId: { type: Array, required: true },
    userId: { type: String, required: true },
    quantity: { type: Number, required: true },
  }, { timestamps: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
