// REQUIRE PACKAGES
require("dotenv").config();
const mongoose = require("mongoose")
// const nodemailer = require('nodemailer')

// REQUIRES
// const companyEmail = process.env.COMPANY_EMAIL
const CommentsModel = require("../models/ReachUsModel");
const { response } = require("express");

const createComment = async (req, res) => {
     try {
          const comment = req.body;
          if (!comment) return res.status(400).send("No comment Passed");

          const newComment = new CommentsModel(comment);
          const savedComment = await newComment.save();
     
          return res.status(200).send("Email Sent Successfully");
     } catch (error) {
          if (error.message == "Comments validation failed: comment: Path `comment` (`bmnmnmnkuytfdoiuyt`) is shorter than the minimum allowed length (30).") {
               return res.status(400).send("Comment Too short")
          }
          return res.status(400).send("Error Sending The Comment:", error.message); 
     }
}

const getComments = async (req, res) => {
     try {
          let comments = await CommentsModel.find().sort({ createdAt: -1 }).limit(10)
          // comments.sort((a, b) => b.createdAt - a.createdAt)
          res.status(200).send(comments)
     } catch (error) {
          res.status(400).send("Server Error")
     }
}

module.exports = { createComment, getComments };
