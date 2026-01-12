const dotenv = require("dotenv");

dotenv.config();

const express = require("express");

const { Server } = require("socket.io");

const http = require("http");

const cookiesPurser = require("cookie-parser");

const connectDB = require("./config/db");

const app = express();

const cors = require("cors");

const server = http.createServer(app);

const Homework = require("./models/homework.model");

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

global.io = io;
// =======================Route Require======================
const userRouter = require("./router/user.route");
const studentRouter = require("./router/student.route");
const classRouter = require("./router/class.route");
const homeworkRouter = require("./router/homework.route");
const announcemantRoute = require("./router/anouncement.route");
const attendanceRoute = require("./router/attendance.route");

// ===================MiddleWere=====================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookiesPurser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// =============DB Connection================
connectDB();

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join-school", ({ school }) => {
    socket.join(school);
    console.log(`Socket ${socket.id} joined school: ${school}`);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user", userRouter);
app.use("/api/student", studentRouter);
app.use("/api/classes", classRouter);
app.use("/api/homework", homeworkRouter);
app.use("/api/announcemant", announcemantRoute);
app.use("/api/attendance", attendanceRoute);

module.exports = server;
