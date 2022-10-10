const express = require('express');
const router = express.Router();
const multer = require("multer");
const Customer = require("../Models/customer");


// Route for Customer Signin
router.post("/CustomerSignin",(req,res)=>{
    const {email,password} =req.body;
    Customer.findOne({email:email},(err,customer)=>{
        if(customer){
           if(password === customer.password){
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

// Route for Customer Signup
router.post("/CustomerSignup",(req,res)=>{
    console.log(req.body) 
    const {name,email,mobile,password,cpassword} =req.body;
    Customer.findOne({email:email},(err,customer)=>{
        if(customer){
            res.send({message:"User Already Exist"})
        }else {
            const customer = new Customer({name,email,mobile,password,cpassword})
            customer.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Registration Sucessfull"})
                }
            })
        }
    })
})

// Route for get all customers
router.get('/AllCustomers', (req,res) =>{
    Customer.find().exec((err,Customer)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Customer
        });
    });
});
router.get("/AllCustomers/:id", (req,res) =>{

    let postId = req.params.id;

    Customer.findById(postId,(err,post) =>{

        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            existingCustomer:post
        });
    });
});
 
  //Get a room by Id
  router.get("/customer/:id", (req, res) => {
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