const { required } = require("joi");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const productModel = require("../models/ProductModel");


const localProducts = async (req, res) => {
    const directoryPath = path.join(__dirname, "./imgs");
    const products = [];
    const productData = await productModel.find()
    if (!productData || productData === null) return res.status(400).send("No Product");

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

     function readImagesForProduct(product) {
          product.name.forEach(fileName => {
              const imagePath = path.join(directoryPath, fileName);
              try {
                  const imageData = fs.readFileSync(imagePath, { encoding: 'base64' });
                  product.images.push({
                      filename: fileName,
                      data: imageData
                  });
              } catch (err) {
                  console.error('Error reading image:', err);
              }
          });
     }

     productData.forEach(product => {
          const productWithImages = {
              id: product.id,
              name: product.name,
              normalPrice: product.normalPrice,
              discount: product.discount,
              images: []
          };
          readImagesForProduct(productWithImages);
          products.push(productWithImages);
      });
    shuffle(products);
    res.send({ products: products });
};

module.exports = localProducts;
