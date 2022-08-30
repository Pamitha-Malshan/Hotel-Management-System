
const express = require('express');
const router = express.Router();
const multer = require("multer");
const User = require("../Models/Register");



router.post("/Login",(req,res)=>{
    const {name,password} =req.body;
    User.findOne({name:name},(err,user)=>{
        if(user){
           if(password === user.password){
            return res.status(200).json({
                success:"Login Successfully"
            });
           }else{
            return res.status(400).json({error:"Wrong Cedencial"});
           }
        }else{
            return res.status(400).json({error:"Not Registed User"});
        }
    })
});

router.post("/register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password,Repassword} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User Already Exist"})
        }else {
            const user = new User({name,email,password,Repassword})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Registration Sucessfull"})
                }
            })
        }
    })
})


module.exports = router;