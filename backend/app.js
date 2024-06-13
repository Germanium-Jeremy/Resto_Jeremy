// REQUIRE PACKAGES AND CONFIGURE THEM
const express = require("express");
const cors = require("cors");
const mangoose = require("mongoose");
require("dotenv").config();

// MIDDLEWARES CONFIGURATIONS
const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ROUTES CONFIGURATIONS
const userRoutes = require("./routes/userRouter");

// DOTENV AND CONFIG VARIABLES READINGS
const port = process.env.PORT;

// USING ROUTES
app.use(userRoutes);

// SIMPLE ROUTES
app.get("/", (req, res) => res.send("Index Route of German-Resto"));
app.post("/", (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).json("No Name.");

  console.log(name);
  res.status(200).json({ name: name });
});

// MONGO CONNECTIONS
mangoose
  .connect(process.env.DB_MINE, {})
  .then(() => console.log("Mongo Db Connection Connected Successfully"))
  .catch((error) => console.log("Connection Mongo Db Failed: ", error.message));

// PORT CONNECTION FOR SERVER
app.listen(port, (req, res) => console.log(`Server running on port ${port}`));
