// routes/homeworkRoutes.js
const express = require("express");
const {
  createAnouncement,
  getAnnouncemant,
} = require("../controller/anouncement.controller");

const router = express.Router();

router.post("/", createAnouncement);

router.get("/", getAnnouncemant);

module.exports = router;
