const express = require("express");
const {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
} = require("../controller/school.controller");

const router = express.Router();

router.post("/", createSchool);
router.get("/", getAllSchools);
router.get("/:id", getSchoolById);
router.put("/:id", updateSchool);
router.delete("/:id", deleteSchool);

module.exports = router;
