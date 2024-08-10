// REQUIRE PACKAGES
require("dotenv").config();
const mongoose = require("mongoose")

// REQUIRE PRODUCT IMAGES
const OrderModel = require("../models/OrderModel")
const ProductModel = require("../models/ProductModel")

const getOrders = async (req, res) => {
     let response = await OrderModel.find()
     if (!response || response === null) return res.status(400).send("No Order Made");
     console.log(response)
     res.status(200).send(response);
};

const arrangeOrders = async (productsIds) => {
     const ids = productsIds.map(product => product.id);
 
     const products = await ProductModel.find({ _id: { $in: ids } });
 
     if (products.length === 0) {
         console.log("Products Missed");
     }
 
     return products;
 }

const orderProduct = async (req, res) => {
     try {
          const reqOrder = req.body;
          if (!reqOrder) return res.status(400).send("No Order Details");
          if (!reqOrder.userId) res.status(401).send("You are not logged In")
     
          const newOrder = new OrderModel(reqOrder);
          const savedOrder = await newOrder.save();
     
          return res.status(200).send({savedOrder, message: "Order Successful."});
     } catch (error) {
          console.error("Error Making Order:", error);
          return res.status(500).send("Internal Server Error");
     }
}

const getCertainOrder = async (req, res) => {
     const months = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Aprl', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Dec' }
     const days = { 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 7: 'Sun' }
     const dateNow = new Date()
     try {
          const { userId } = req.body;
      
          if (!userId) return res.status(400).json("No User Id provided");
 
          if (!mongoose.Types.ObjectId.isValid(userId)) {
               return res.status(400).json("Invalid User Id");
          }
      
          const orders = await OrderModel.find({ userId: userId}).sort({ createdAt: -1 }).limit(8);
          if (!orders) return res.status(404).send("No Order Found");

          orders.forEach(order => {
               const newYear = new Date(order.createdAt).getFullYear()
               const newMonth = new Date(order.createdAt).getMonth()
               const newDay = new Date(order.createdAt).getDay()
               const newHours = new Date(order.createdAt).getHours()
               const newMinutes = new Date(order.createdAt).getMinutes()
     
               if (newYear == dateNow.getFullYear()) {
                    if (newMonth == dateNow.getMonth()) {
                         if (newDay == dateNow.getDay()){
                              if (newHours == dateNow.getHours()){
                                   if (newMinutes == dateNow.getMinutes()) {
                                        order.dateOfMake = "Just Now"
                                   } else {
                                        order.dateOfMake = "A while ago"
                                   }
                              } else {
                                   order.dateOfMake = "Today, " + newHours + ":" + newMinutes
                              }
                         } else {
                              const newDate = new Date(order.createdAt).getDate()
                              const newDay4 = new Date(order.createdAt).getDay()
                              const supp = newDate == 1 ? "st" : newDate == 2 ? "nd" : newDate == 3 ? "rd" : "th";
                              order.dateOfMake = days[newDay4] + " " + newDate + supp
                         }
                    } else {
                         const newMonth3 = new Date(order.createdAt).getMonth() + 1
                         const newDay3 = new Date(order.createdAt).getDate()
                         order.dateOfMake = months[newMonth3] + " " + newDay3
                    }
               } else {
                    const newyear2 = new Date(order.createdAt).getFullYear()
                    const newMonth2 = new Date(order.createdAt).getMonth() + 1
                    const newDay2 = new Date(order.createdAt).getDate()
                    order.dateOfMake = months[newMonth2] + " " + newDay2 + ", " + newyear2
               }
          })
          
          const realOrders = await arrangeOrders(orders)
          console.log(realOrders)
          res.status(200).send(orders);
     } catch (error) {
          console.error("Error getting order:", error.message);
          return res.status(500).json("Internal Server Error");
     }
};

module.exports = { getOrders, orderProduct, getCertainOrder };
