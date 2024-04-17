const mongoose = require('mongoose');

const user = mongoose.Schema({
    sno:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
    }
});

const User = module.exports = mongoose.model('chinese', user);