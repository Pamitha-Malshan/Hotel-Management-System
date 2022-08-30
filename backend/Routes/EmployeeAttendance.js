const express = require('express');
const router = express.Router();

const Attendance = require("../Models/EmployeeAttendanc");


router.post("/Attendancesave", (req,res) =>{

    let newAttendance = new Attendance(req.body);

    newAttendance.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employer saved successfully"
        });
    });
}); 

router.get('/getattendance', (req,res) =>{
    Attendance.find().exec((err,Attendance)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Attendance
        });
    });
});

router.route("/deleteattendance/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Attendance.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;