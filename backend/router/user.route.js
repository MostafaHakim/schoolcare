const express = require("express");
const {
  getAllUsers,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  userProfile,
  logoutUser,
} = require("../controller/user.controller");
const authUser = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/profile", authUser, userProfile);
router.get("/logout", authUser, logoutUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
