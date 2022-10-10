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
    const {name,email,mobile,password,cpassword,nation} =req.body;
    Customer.findOne({email:email},(err,customer)=>{
        if(customer){
            res.send({message:"User Already Exist"})
        }else {
            const customer = new Customer({name,email,mobile,password,cpassword,nation})
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

 
  //Get a Customer by Id
  /*router.get("CustomerProfile/:email", (req, res) => {
    let email = req.params.email;
    console.log(email);
    CustomerProfile.findOne({ email: email }).exec((err, customer) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        existingRooms: customer,
      });
    });
  });*/
  
  router.get("/get/:id", (req,res) =>{

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

/*router.put('/update/:id',(req,res)=>{
    Customer.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update successfully"
            });
        }
    );
});*/

router.route("/deletecustomer/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;