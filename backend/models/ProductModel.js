const mongoose = require("mongoose");
const ProdSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    normalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    image: { type: String, default: "" },
    ingredients: { type: [String], default: [] },
  }, 
  { timestamps: true }     
);

const ProductModel = mongoose.model("Product", ProdSchema);

module.exports = ProductModel;
