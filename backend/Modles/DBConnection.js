const mongoose =require('mongoose');

// require('dotenvi').config()
require('dotenv').config()

const connectToDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connected to DB');
    }catch(e){
        console.log(e.message);
    }
}

module.exports={connectToDB};