const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookiesPurser = require("cookie-parser");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

const userRouter = require("./router/user.route");
const studentRouter = require("./router/student.route");
const classRouter = require("./router/class.route");
const homeworkRouter = require("./router/homework.route");
const announcemantRoute = require("./router/anouncement.route");

connectDB();
app.use(cors());
app.use(cookiesPurser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user", userRouter);
app.use("/api/student", studentRouter);
app.use("/api/classes", classRouter);
app.use("/api/homework", homeworkRouter);
app.use("/api/announcemant", announcemantRoute);

module.exports = app;
