const mongoose = require('mongoose');

const EmployeeRegister = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    IDNO:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true  
    }
   
});

module.exports = mongoose.model('EmployeeAttendance', EmployeeRegister);