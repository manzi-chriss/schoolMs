const mongoose = require('mongoose')

const staffSchema= new  mongoose.Schema({
    fullName:{type:String, required:true},
    id:{type:String, required:true},
    phone:{type:Number, required:true},
    title:{type:String, required:true},
    responsibility:{type:String, required:true},   
})

const Staff = mongoose.model('Staff',staffSchema)

module.exports = Staff