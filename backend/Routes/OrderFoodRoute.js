const express = require("express");
const FoodOrder = require("../Models/OrderFood.js");
const router = express.Router();

//----------Insert Order Details into database
router.post("/Order", (req, res) => {
  let newFoodOrder = new FoodOrder(req.body);

  newFoodOrder.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
    return res.status(200).json({
      success: "Food Ordered",
    });
  });
});

//----------get Ordered Food Details using email
router.get("/OrderFood/:email", (req, res) => {
  let email = req.params.email;
  console.log(email);
  FoodOrder.findOne({ email: email }).exec((err, food) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingFood: food,
    });
  });
});

//-------------get all Orderd Food
router.get("/OrderFood", (req, res) => {
  FoodOrder.find().exec((err, food) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingFoods: food,
    });
  });
});

router.get("/OrderFood/:email", (req, res) => {
  let email = req.params.email;

 FoodOrder.findOne({ email: email }).exec((err, food) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingFoods: food,
    });
  });
});

// //---------get room reservation income
// router.get('/getincome', async (req, res) =>  {
//   const today = new Date();

//     let TODAY = today.getFullYear();
//     let YEAR_BEFORE = TODAY - 1;
//     const data = await RoomBooking.aggregate([
//       {
//           $match: { checkIn: {$gte: YEAR_BEFORE, $lte: TODAY} }
//       },
//       {
//           $group: {
//               _id: { year: { $year: "$checkIn" }, month: { $month: "$checkIn" } },
//               total_cost_month: { $sum: "$total" }
//           }
//       }
//       ], { "allowDiskUse" : true })
//        return res.status(200).json({
//         success: true,
//         data: data
//       });

//   },)

module.exports = router;
