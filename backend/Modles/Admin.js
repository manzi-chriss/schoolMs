const mongoose = require('mongoose')

const adminSchema=new mongoose.Schema({
    fullname:{type:String,default:"admin"},
    phone:{type:Number,default:"1234567890"},
    title:{type:String,default:"Master"},
    id:{type:String,default:"admin"},
    password:{type:String,default:"admin"}
})

const Admin= mongoose.model('Admin',adminSchema)

module.exports=Admin