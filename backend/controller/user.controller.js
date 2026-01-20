const User = require("../models/user.model");
const BlackListToken = require("../models/blackListTokenModel");

const createUser = async (req, res) => {
  try {
    const { username, userId, userRole, password, phone, school } = req.body;
    if (!username || !userId || !password || !userRole || !phone || !school) {
      return res.status(400).send("Missing required fields");
    }

    const isExistingUser = await User.findOne({ userId });

    if (isExistingUser) {
      return res.status(409).send("Username already exists");
    }

    const newUser = new User({
      username,
      userId,
      userRole,
      password,
      phone,
      school,
    });

    const user = await newUser.save();

    const token = user.generateAuthToken(user);

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { userId, password, userRole } = req.body;

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).send("User not found");
    }
    const isMatchRole = user.userRole === userRole;
    if (!isMatchRole) {
      return res.status(401).send("Invalid User");
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid password");
    }

    const token = user.generateAuthToken();

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const userProfile = (req, res, next) => {
  res.status(201).json(req.user);
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const fetchTeacherBySchool = async (req, res) => {
  try {
    const { school } = req.params;

    const teacher = await User.find({ school });

    if (!teacher) {
      return res.status(404).send("Teacher not found");
    }

    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await BlackListToken.create({ token });
  res.status(200).json({ message: "Logout" });
};
module.exports = {
  createUser,
  getAllUsers,
  loginUser,
  updateUser,
  deleteUser,
  userProfile,
  logoutUser,
  fetchTeacherBySchool,
};
