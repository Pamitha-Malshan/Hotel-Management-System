const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer'
    },

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },

    
});

module.exports = mongoose.model('profile', ProfileSchema)