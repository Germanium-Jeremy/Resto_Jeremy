const express = require("express")
const cors = require('cors')
const mangoose = require("mongoose")
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const userRoutes = require("./routes/userRouter")

app.get("/", (req, res) => res.send("Index Route of German-Resto"))

app.use(userRoutes)

app.post("/", (req, res) => {
     const name = req.body.name;
     if (!name) return res.status(400).json("No Name.");

     console.log(name)
     res.status(200).json({ name: name });
});

mangoose
  .connect(process.env.DB_MINE, {})
  .then(() => console.log("Mongo Db Connection Connected Successfully"))
  .catch((error) => console.log("Connection Mongo Db Failed: ", error.message));

const port = process.env.PORT

app.listen(port, (req, res) => console.log(`Server running on port ${port}`))