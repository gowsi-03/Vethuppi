const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cnnectDB = require("./config/db");

cnnectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

const adrouter = require("./routes/admin");
app.use("/admin", adrouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
