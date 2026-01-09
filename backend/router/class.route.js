const express = require("express");
const {
  getAllClass,
  createNewClass,
  getClassById,
} = require("../controller/class.controller");
const router = express.Router();

router.get("/", getAllClass);
router.post("/", createNewClass);
router.get("/:id", getClassById);

module.exports = router;
