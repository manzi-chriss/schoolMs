const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    dob:{type:Date,required:true},
    regNumber:{type:Number,required:true},
    year:{type:Date,default:Date.now()},
    class:{type:Number,required:true},
    parentN:{type:String,required:true},
    parentPhone:{type:Number,required:true},
    marks:{type:Number,default:40},
})

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;