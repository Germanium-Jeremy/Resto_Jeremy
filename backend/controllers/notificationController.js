// REQUIRE PACKAGES
require("dotenv").config();
const mongoose = require("mongoose")

// REQUIRE PRODUCT IMAGES
const NotificationModel = require("../models/NotificationModel");

const getNoifications = async (req, res) => {
     const months = { 13: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Aprl', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Dec' }
     const userId = req.body.userId
     const dateNow = new Date()
     if (!userId) return res.status(400).send("No Id")

     let response = await NotificationModel.find({ userId: userId })
     if (!response || response === null) return res.status(400).send([]);

     response.forEach(note => {
          let newYear = new Date(note.createdAt).getFullYear()
          // if (newYear == dateNow.getFullYear()) {
          //      console.log(newYear)
          // } else {
               const newyear2 = new Date(note.createdAt).getFullYear()
               const newMonth2 = new Date(note.createdAt).getMonth() + 1
               const newDay2 = new Date(note.createdAt).getDate()
               console.log(newyear2 + " " + months[newMonth2] + " " + newDay2)
               // note.createdAt = Aug 27, 2020
          // }
     })

     res.status(200).send(response);
};

const createNotification = async(req, res) => {
     try {
          const notification = req.body;
          if (!notification) return res.status(400).send("No Data Passed");
     
          const newNot = new NotificationModel(notification);
          const savedNotification = await newNot.save();
     
          console.log(savedNotification)
          return res.status(200).send(savedNotification);
     } catch (error) {
          return console.error("Error Making Notification:", error); 
     }
}

module.exports = { getNoifications, createNotification,  };
