require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const globalRouter = require("./const/router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", globalRouter);

const MONGO_URI =
  "mongodb+srv://dimitridovlev:0oVt5AQgjPioaoD9@cluster0.wos7zn2.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI).catch((error) => handleError(error));

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server is listening to port ${process.env.PORT}`);
});
