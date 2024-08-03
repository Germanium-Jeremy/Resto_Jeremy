// REQUIRE PACKAGES
require("dotenv").config();
const mongoose = require("mongoose")

// REQUIRE PRODUCT IMAGES
const NotificationModel = require("../models/NotificationModel");
const { date } = require("joi");

const getNoifications = async (req, res) => {
     const months = { 13: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Aprl', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Dec' }
     const days = { 8: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 7: 'Sun' }
     const userId = req.body.userId
     const dateNow = new Date()

     if (!userId) return res.status(400).send("No Id")

     var response = await NotificationModel.find({ userId: userId })
     if (!response || response === null) return res.status(400).send([]);

     response.forEach(note => {
          const newYear = new Date(note.createdAt).getFullYear()
          const newMonth = new Date(note.createdAt).getMonth()
          const newDay = new Date(note.createdAt).getDay()
          const newHours = new Date(note.createdAt).getHours()
          const newMinutes = new Date(note.createdAt).getMinutes()

          if (newYear == dateNow.getFullYear()) {
               if (newMonth == dateNow.getMonth()) {
                    if (newDay == dateNow.getDay()){
                         if (newHours == dateNow.getHours()){
                              if (newMinutes == dateNow.getMinutes()) {
                                   note.dateOfMake = "Just Now"
                              } else {
                                   note.dateOfMake = "A while ago"
                              }
                         } else {
                              note.dateOfMake = "Today, " + newHours + ":" + newMinutes
                         }
                    } else {
                         const newDate = new Date(note.createdAt).getDate()
                         const newDay4 = new Date(note.createdAt).getDay()
                         const supp = newDate == 1 ? "st" : newDate == 2 ? "nd" : newDate == 3 ? "rd" : "th";
                         note.dateOfMake = days[newDay4] + " " + newDate + supp
                    }
               } else {
                    const newMonth3 = new Date(note.createdAt).getMonth() + 1
                    const newDay3 = new Date(note.createdAt).getDate()
                    note.dateOfMake = months[newMonth3] + " " + newDay3
               }
          } else {
               const newyear2 = new Date(note.createdAt).getFullYear()
               const newMonth2 = new Date(note.createdAt).getMonth() + 1
               const newDay2 = new Date(note.createdAt).getDate()
               note.dateOfMake = months[newMonth2] + " " + newDay2 + ", " + newyear2
          }
     })

     response.sort((a, b) => b.createdAt - a.createdAt)
     res.status(200).send(response);
};

const createNotification = async(req, res) => {
     try {
          const notification = req.body;
          if (!notification) return res.status(400).send("No Data Passed");
     
          const newNot = new NotificationModel(notification);
          const savedNotification = await newNot.save();
     
          return res.status(200).send(savedNotification);
     } catch (error) {
          return console.error("Error Making Notification:", error); 
     }
}

module.exports = { getNoifications, createNotification,  };
