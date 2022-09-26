const express = require("express");
const RoomBooking = require("../Models/RoomBooking.js");
const router = express.Router();


router.post("/booking", (req, res) => {

    let newroomBooking = new RoomBooking(req.body);
    

    newroomBooking.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      return res.status(200).json({
        success: "Room Booked",
      });
    });

  });



router.get('/bookedrooms/:email', (req, res) => {
  let email = req.params.email;
  console.log(email);
  RoomBooking.findOne({email: email}).exec((err, room) => {
    if(err){
      return res.status(400).json({
        error:err
    });
  }
  return res.status(200).json({
    success: true,
    existingRooms: room
  });
  });
});

router.get('/bookedrooms', (req, res) => {
  
  
  RoomBooking.find().exec((err, room) => {
    if(err){
      return res.status(400).json({
        error:err
    });
  }
  return res.status(200).json({
    success: true,
    existingRooms: room
  });
  });
});

router.get('/bookedroom/:email', (req, res) => {
  let email = req.params.email;
  
  RoomBooking.findOne({email: email}).exec((err, room) => {
    if(err){
      return res.status(400).json({
        error:err
    });
  }
  return res.status(200).json({
    success: true,
    existingRooms: room
  });
  });
});


router.get('/getincome', async (req, res) =>  {
  const today = new Date();

    let TODAY = today.getFullYear();
    let YEAR_BEFORE = TODAY - 1;
    const data = await RoomBooking.aggregate([
      { 
          $match: { checkIn: {$gte: YEAR_BEFORE, $lte: TODAY} } 
      },
      { 
          $group: {
              _id: { year: { $year: "$checkIn" }, month: { $month: "$checkIn" } },
              total_cost_month: { $sum: "$total" }
          }
      }
      ], { "allowDiskUse" : true })
       return res.status(200).json({
        success: true,
        data: data     
      });
     

      
  },)
  

//   // { $sort: {_id: 1 }},
//   {
//     $project: {
//       total: "$_id.total",
//       Month: {
//         $arrayElemAt: [
//           [
//             "",
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//           ],
//           "$_id.month",
//         ],
//       },
//     },
    
//   },
//   {
//     $group: {
//       _id: { month: { $month: "$createdAt" } },

//       // total : {$sum: { $toLong: "$total" }},
//       total: { $sum: { $toInt: "$total" } }
//       // $convert: {total: { $sum: { $toLong: "$total" } }, onError: '',onNull: ''}
      
//     }
//   },
// ], { "allowDiskUse" : true })
// return res.status(200).json({
//   success: true,
//   data: data



// });
// });

// router.get('/bookingincome', async (req, res) => {
//     const today = new Date();

//     let TODAY = today.getFullYear();
//     let YEAR_BEFORE = TODAY - 1;
//   const data = await RoomBooking.aggregate([
//     { $match: { checkIn: {$gte: YEAR_BEFORE, $lte: TODAY} } },
//     { $group: { _id: 1, amount: { $sum: "$total" } } }

   
    
// ], {allowDiskUse: true})
//     return res.status(200).json({
//       success: true,
//       data: data
//     });
//     });


  module.exports = router;