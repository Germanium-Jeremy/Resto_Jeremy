const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    pricePaid: { type: String, required: true },
    quantity: { type: Number, required: true },
  }, { timestamps: true }
);

const ProductModel = mongoose.model("Order", OrderSchema);

module.exports = ProductModel;
