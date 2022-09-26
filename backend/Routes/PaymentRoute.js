const express = require("express");
const router = express.Router();
const payment = require("../Models/Payment");

//-----------Insert Payment details into databse
router.post("/payment", (req, res) => {
  let newPayment = new payment(req.body);

  newPayment.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
    return res.status(200).json({
      success: "Payment Completed Successfully",
    });
  });
});

module.exports = router;
