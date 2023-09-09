const router =require('express').Router()
const Student = require('../Modles/Student')
const Admin = require('../Modles/Admin')
const Staff = require('../Modles/Staff')

router.post('/admin', async (req, res) => {
    const { title,password,phone } = req.body;
    try { 
        const  admin= await Admin.findOne({phone});
        if (!admin) return res.status(401).json({ msg: "Invalid phone number or password" });
        if (admin.password!= password) return res.status(401).json({ msg: "Invalid phone number or password" });
        return res.status(201).json({ object:admin,msg:"successfully logged in" });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ msg: err.message });
    }
});

router.post('/student', async (req, res) => {
    const { number } = req.body;
    try {
       
        const  student= await Student.findOne({regNumber:number});
        if (!student) return res.status(401).json({ msg: "Invalid Registration Number or not Registered" });
        if (student.regNumber!= number) return res.status(401).json({ msg: "Invalid Registration Number or not Registered" });
        console.log(student)
        return res.status(201).json({ object:student,msg:"successfully logged in" });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ msg: err.message });
    }
});

router.post('/staff', async (req, res) => {
    const {password,phone } = req.body;
    try {
        
        const  staff= await Staff.findOne({phone});
        if (!staff) return res.status(401).json({ msg: "Invalid phone number or password" });
        if (staff.password!= password) return res.status(401).json({ msg: "Invalid phone number or password" });
        return res.status(201).json({ object:staff,msg:"successfully logged in" });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ msg: err.message });
    }
});

module.exports = router;