const express = require("express");
const router = express.Router();
const multer = require("multer");
const rooms = require("../Models/room");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads/rooms/");
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

//Insert Room

router.post("/room/save", upload.single("file"), (req, res) => {
  const file = new rooms({
    roomName: req.body.roomName,
    roomFeatures: req.body.roomFeatures,
    roomAmount: req.body.roomAmount,
    roomType: req.body.roomType,
    image: req.file.originalname,
  });

  file
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Get All Rooms

router.get("/getrooms", (req, res) => {
  rooms.find({status: 'Available'}).exec((err, room) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(200).json({
      success: true,
      exisistingRooms: room,
    });
  });
});

//Delete a Room By Id
router.route("/deleteroom/:id").delete(async (req, res) => {
  let roomId = req.params.id;

  await rooms
    .findByIdAndDelete(roomId)
    .then(() => {
      res.status(200).send({ status: "Room Delete" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with delete room", error: err.message });
    });
});


//Update a Room By Id
router
  .route("/room/update/:id")
  .put(upload.single("file"), async (req, res) => {
    let roomId = req.params.id;

    const { roomName, roomFeatures, roomAmount, roomType, image, status } = req.body;

    const updateRoom = {
      roomName,
      roomFeatures,
      roomAmount,
      roomType,
      image,
      status,
    };

    await rooms
      .findByIdAndUpdate(roomId, updateRoom)
      .then(() => {
        res.status(200).send({ status: "Room Updated" });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: "Error with Updating data", error: err.message });
      });
  });

//Get a room by Id
router.get("/room/:id", (req, res) => {
  let roomId = req.params.id;

  rooms.findById(roomId, (err, room) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      room,
    });
  });
});

module.exports = router;
