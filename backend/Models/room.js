const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true,
    trim: true,
  },
  roomFeatures: {
    type: String,
    required: true,
  },
  roomAmount: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Available",
  },
});

module.exports = mongoose.model("Room", roomSchema);
