const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookiesPurser = require("cookie-parser");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const userRouter = require("./router/user.route");

connectDB();
app.use(cors());
app.use(cookiesPurser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user", userRouter);

module.exports = app;
