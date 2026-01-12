const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    school: String,
    title: String,
    message: String,
    type: {
      type: String,
      enum: ["homework", "announcement"],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
