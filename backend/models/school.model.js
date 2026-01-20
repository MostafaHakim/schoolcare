const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  eiin: {
    type: String,
    required: true,
  },
});

const Schools = mongoose.model("Schools", schoolSchema);

module.exports = Schools;
