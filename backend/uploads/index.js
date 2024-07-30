const { required } = require("joi");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const data = require("../data/Products");


const localProducts = (req, res) => {
     const directoryPath = path.join(__dirname, "./imgs");
     const products = [];
     const productData = data

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
     res.send({ products: products });
};

module.exports = localProducts;
