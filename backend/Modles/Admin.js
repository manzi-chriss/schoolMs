const mongoose = require('mongoose')

const adminSchema=new mongoose.Schema({
    fullname:{type:String,default:"admin"},
    id:{type:String,default:"admin"},
    password:{type:String,default:"admin"}
})

const Admin= mongoose.model('Admin',adminSchema)

module.exports=Admin