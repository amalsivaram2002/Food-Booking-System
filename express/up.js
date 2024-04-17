const mongoose = require('mongoose');

const user = mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});
const UserModel = module.exports = mongoose.model('User',user,'User');