// REQUIRE PACKAGES
require("dotenv").config();
const mongoose = require("mongoose")

// REQUIRE PRODUCT IMAGES
const OrderModel = require("../models/OrderModel")

const getOrders = async (req, res) => {
     let response = await OrderModel.find()
     if (!response || response === null) return res.status(400).send("No Order Made");
     console.log(response)
     res.status(200).send(response);
};

const orderProduct = async (req, res) => {
     try {
          const reqOrder = req.body;
          if (!reqOrder) return res.status(400).send("No Order Details");
          if (!reqOrder.userId) res.status(401).send("You are not logged In")
     
          const newOrder = new OrderModel(reqOrder);
          const savedOrder = await newOrder.save();
     
          console.log(savedOrder)
          return res.status(200).send({savedOrder, message: "Order Successful."});
     } catch (error) {
          console.error("Error Making Order:", error);
          return res.status(500).send("Internal Server Error");
     }
}

const getCertainOrder = async (req, res) => {
     try {
          const { orderId } = req.body;
      
          if (!orderId) {
            return res.status(400).json("No Order Id provided");
          } else {
               console.log("Order Id Got");
          }

          if (!mongoose.Types.ObjectId.isValid(orderId)) {
               return res.status(400).json("Invalid Order Id");
          }
      
          const order = await OrderModel.findById(orderId);
      
          if (!order) return res.status(404).send("No Order Found");
      
          console.log(order)
          res.status(200).send(order);
     } catch (error) {
          console.error("Error getting order:", error.message);
          return res.status(500).json("Internal Server Error");
     }
};

module.exports = { getOrders, orderProduct, getCertainOrder };
