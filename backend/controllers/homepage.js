const router = require('express').Router();
const Students=require('../Modles/Student')
const Staff = require('../Modles/Staff');



router.get('/',async (req,res)=>{
   try{
    const students=await Students.find()
    const staff=await Staff.find()
    return res.status(200).json({students,staff});
   }catch(err){
    console.log(err.message);
    return res.status(500).json({message: err.message,msg:"internal error"});
   }
})

module.exports = router