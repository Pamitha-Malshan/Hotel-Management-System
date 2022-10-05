const express = require("express");
const router = express.Router();
const multer = require("multer");
const foods = require("../Models/food");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads/food/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });


//Insert food

router.post("/food/save", upload.single("file"), (req, res) => {
    const file = new foods({
      foodName: req.body.foodName,
      foodRecepie: req.body.foodRecepie,
      foodPrice: req.body.foodPrice,
      foodCatogory: req.body.foodCatogory,
      image: req.file.originalname,
    });
  
    file
      .save()
      .then(() => res.json("success"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
  
  //Get All Food
  
  router.get("/getfoods", (req, res) => {
    foods.find().exec((err, food) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(200).json({
        success: true,
        exisistingFoods: food,
      });
    });
  });
  
  router.get("/getfoods/available", (req, res) => {
    foods.find({status: 'Available'}).exec((err, food) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(200).json({
        success: true,
        exisistingFoods: food,
      });
    });
  });
  
  //Delete a Food By Id
  router.route("/deletefood/:id").delete(async (req, res) => {
    let foodId = req.params.id;
  
    await foods
      .findByIdAndDelete(foodId)
      .then(() => {
        res.status(200).send({ status: "Food Delete" });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with delete food", error: err.message });
      });
  });
  
  
  //Update a Food By Id
  router
    .route("/food/update/:id")
    .put(upload.single("file"), async (req, res) => {
      let foodId = req.params.id;
  
      const { foodName, foodRecepie,foodPrice,foodCatogory, image,status } = req.body;
  
      const updateFood = {foodName, foodRecepie,foodPrice,foodCatogory, image,status };
  
      await foods
        .findByIdAndUpdate(foodId, updateFood)
        .then(() => {
          res.status(200).send({ status: "Food Updated" });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .send({ status: "Error with Updating data", error: err.message });
        });
    });
  
  //Get a food by Id
  router.get("/food/:id", (req, res) => {
    let foodId = req.params.id;
  
    foods.findById(foodId, (err, food) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        food,
      });
    });
  });
  
  module.exports = router;