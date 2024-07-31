// REQUIRE PACKAGES
require("dotenv").config();
const mongoose = require("mongoose")

// REQUIRE PRODUCT IMAGES
const NotificationModel = require("../models/NotificationModel");
const { object } = require("joi");

const getNoifications = async (req, res) => {
     const userId = req.body.userId
     if (!userId) res.status(400).send("No Id")
     let response = await NotificationModel.findById({ userId })
     if (!response || response === null) return res.status(400).send("null");
     console.log(response)
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
