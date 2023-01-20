const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
 
CategoryName:String,
name:String,
img:String,
options:{
    half:Number,
    full:Number
},
description:String
});

module.exports=mongoose.model('food_items',userSchema);