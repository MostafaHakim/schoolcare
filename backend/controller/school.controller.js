const School = require("../models/school.model");

exports.createSchool = async (req, res) => {
  try {
    const { school, address, eiin } = req.body;
    console.log(req.body);
    // check duplicate school
    const existingSchool = await School.findOne({ school });
    if (existingSchool) {
      return res.status(400).json({
        success: false,
        message: "School already exists",
      });
    }

    const newSchool = await School.create({
      school,
      address,
      eiin,
    });

    res.status(201).json({
      success: true,
      data: newSchool,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find().sort({ school: 1 });

    res.status(200).json({
      success: true,
      count: schools.length,
      data: schools,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }

    res.status(200).json({
      success: true,
      data: school,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateSchool = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedSchool) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedSchool,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }

    await school.deleteOne();

    res.status(200).json({
      success: true,
      message: "School deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
