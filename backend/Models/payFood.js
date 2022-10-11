const mongoose = require("mongoose");
const validator = require("validator");

const payFoodSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  bookingId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  cardNumber: {
    type: String,
    required: true,
    trim: true,
  },
  cardType: {
    type: String,
    required: true,
  },
  cardExpireDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
    trim: true,
  },
  total: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("payFood", payFoodSchema);
