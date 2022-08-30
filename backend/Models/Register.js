const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Repassword:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Register', RegisterSchema)