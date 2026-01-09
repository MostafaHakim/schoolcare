const Class = require("../models/classes.model");

const createNewClass = async (req, res) => {
  const { name, school } = req.body;
  console.log(req.body);
  try {
    if (!name || !school) {
      return res.status(401).json({ message: "all fields are required" });
    }
    const newClass = new Class({
      name,
      school,
    });
    const saveClass = await newClass.save();
    res.status(201).json(saveClass);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const getAllClass = async (req, res) => {
  try {
    const allClass = await Class.find();
    res.status(200).json(allClass);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const getClass = await Class.find({ _id: id });
    res.status(200).json(getClass);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { createNewClass, getAllClass, getClassById };
