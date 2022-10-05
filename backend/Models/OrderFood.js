const mongoose = require("mongoose");
const validator = require("validator");

const OrderFoodSchema = new mongoose.Schema({
  FoodName: {
    type: String,
    required: true,
    trim: true,
  },
  Quantity: {
    type: String,
    required: true,
    defauult: 1,
    trim: true,
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
  email: {
    type: String,
    required: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: (number) => {
      if (!validator.isMobilePhone(number, "si-LK")) {
        throw new Error("Invalid Phone Number");
      }
    },
  },
  
  address: {
    type: String,
    required: true,
    trim: true,
  },
  
  total: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("OrderFood", OrderFoodSchema);