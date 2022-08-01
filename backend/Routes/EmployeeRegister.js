const express = require('express');
const router = express.Router();

const Employee = require("../Models/EmployeRegister");


router.post("/save", (req,res) =>{

    let newEmployee = new Employee(req.body);

    newEmployee.save((err) =>{
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

router.get('/getemployee', (req,res) =>{
    Employee.find().exec((err,Employee)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Employee
        });
    });
});

module.exports = router;