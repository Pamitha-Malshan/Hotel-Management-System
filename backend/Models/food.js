const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
    trim: true,
  },
  foodRecepie: {
    type: String,
    required: true
  },
  foodPrice: {
    type: String,
    required: true
  },
  foodCatogory: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Available"
  }
});

module.exports = mongoose.model("Food", foodSchema);