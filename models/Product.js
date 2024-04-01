const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:50,
    },
    price:{
        type:Number,
        required:true,
    },
    sale_price:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
});
module.exports = mongoose.model("Product", productScheme);