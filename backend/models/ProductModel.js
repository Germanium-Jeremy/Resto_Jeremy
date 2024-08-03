const { required } = require("joi");
const mongoose = require("mongoose");
const ProdSchema = new mongoose.Schema(
  {
    name: { type: Array, required: true },
    keywords: { type: Array, required: true},
    normalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    images: { type: Array, required: true },
  }, 
  { timestamps: true }     
);

const ProductModel = mongoose.model("Product", ProdSchema);

module.exports = ProductModel;
