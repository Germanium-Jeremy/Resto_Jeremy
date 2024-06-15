// REQUIRE PACKAGES
require("dotenv").config();

// REQUIRE PRODUCT IMAGES
const productModel = require("../models/ProductModel");

const getProducts = async (req, res) => {
     let response = await productModel.find()
     if (!response || response === null) return res.status(400).send("No Product");
     res.status(200).send(response);
};

const addProduct = async (req, res) => {
     try {
          const reqProduct = req.body;
          if (!reqProduct || !reqProduct.productName) return res.status(400).send("No Product Sent or Product Name is missing");
          const prodName = reqProduct.productName;
     
          let response = await productModel.findOne({ productName: prodName });
          if (response) return res.status(400).send(`Product ${prodName} already exists`);
     
          const newProd = new productModel(reqProduct);
          const savedProd = await newProd.save();
     
          return res.status(200).send(savedProd);
          } catch (error) {
               console.error("Error adding product:", error);
               return res.status(500).send("Internal Server Error");
          }
}

const getCertainProd = async (req, res) => {
     try {
          const { prodId } = req.body;
      
          if (!prodId) {
            return res.status(400).json("No Product Id provided");
          } else {
               console.log("Product Id Got");
          }
      
          const product = await productModel.findById({ _id: prodId });
      
          if (!product) {
            return res.status(404).send("No Product Found");
          }
      
          res.status(200).json(product);
        } catch (error) {
          console.error("Error getting product:", error.message);
          return res.status(400).json("Product Not Got");
        }
};

module.exports = { getProducts, getCertainProd, addProduct };
