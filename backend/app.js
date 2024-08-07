// REQUIRE PACKAGES AND CONFIGURE THEM
const express = require("express");
const cors = require("cors");
const mangoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// MIDDLEWARES CONFIGURATIONS
const app = express();
app.use(express.json());
app.use(cors());

// ROUTES CONFIGURATIONS
const userRoutes = require("./routes/userRouter");
const productRoutes = require("./routes/procuctsRoute");
const orderRoutes = require("./routes/OrderRoutes");
const notificationRoutes = require("./routes/notificationRoute")
const commentsRoutes = require("./routes/commentRoutes")

// DOTENV AND CONFIG VARIABLES READINGS
const port = process.env.PORT;

// USING ROUTES
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(notificationRoutes);
app.use(commentsRoutes);

// SIMPLE ROUTES
app.get("/", (req, res) => res.send("Index Route of German-Resto"));
app.post("/", (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).json("No Name.");

  console.log(name);
  res.status(200).json({ name: name });
});
app.get("*", (req, res) => res.send("Roure Not Implemented"));
app.post("*", (req, res) => res.send("Roure Not Implemented"));

// MONGO CONNECTIONS
mangoose
  .connect(process.env.DB_MINE, {})
  .then(() => console.log("Mongo Db Connection Connected Successfully"))
  .catch((error) => console.log("Connection Mongo Db Failed: ", error.message));

// PORT CONNECTION FOR SERVER
app.listen(port, (req, res) =>
  console.log(`Server running on http://localhost:${port}`)
);

module.exports = app;
