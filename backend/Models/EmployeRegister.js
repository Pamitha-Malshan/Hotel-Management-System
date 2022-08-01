const mongoose = require('mongoose');

const EmployeeRegister = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    IDNO:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true  
    },
    role:{
        type:String,
        required:true
      
    }
  
});

module.exports = mongoose.model('EmployeeRegister', EmployeeRegister)