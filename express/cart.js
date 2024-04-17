const mongoose = require('mongoose');

const user = mongoose.Schema({
    "email":String,
    cartlist:[
        {
            name:String,
            price:String,
            
        }
    ]
    
    
});
const cartModel = module.exports = mongoose.model('cart',user,'cart');