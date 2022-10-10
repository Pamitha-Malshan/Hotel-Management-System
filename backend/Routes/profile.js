const express = require('express');
const router = express.Router();
const multer = require("multer");
const Profile = require("../Models/profile");
const Customer = require("../Models/customer");


router.get('/CustomerProfile',async (req, res) => {
    try{
        const profile = await Profile.findOne({customer:req.customer.id}).populate(
            'customer', 
            ['name', 'email']
        );

        if(!profile){
            return res.status(400).json({msg: 'There is no profilr'});
        }

        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});
  
module.exports = router;