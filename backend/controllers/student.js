const router = require('express').Router();
const Student = require('../Modles/Student'); // Assuming the correct path

// Route to save a new student
router.post('/', async (req, res) => {
    const { stdname, regNumber, year, classN, dob, pname, phone } = req.body;
    try {
        
        const student = await Student.findOne({ regNumber });
        if (student) return res.status(401).json({ message: "User with that Registration Number already exists" });
        const newStudent = new Student({
            fullName: stdname,
            regNumber,
            class:classN,
            dob,
            year,
            parentN: pname,
            parentPhone: phone
        });
        await newStudent.save();
        return res.status(201).json({ message: `Student Added Successfully ${newStudent.fullName}` });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ message: err.message });
    }
});


// Route to get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        const numberAll = students.length;
        return res.status(200).json({ students, numberAll,title:"THE TABLE OF ALL STUDENTS IN THE SCHOOL" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});


// Route to get all students who are organized or not organized
router.get('/organized/:state', async (req, res) => {
    try {

        let students;
        let title="THE TABLE ORGANIZED STUDENTS WITH 50% AND ABOVE OF DESCIPLINE MARKS "
        if(req.params.state ==1){
         const  Allstudents = await Student.find()
         students = Allstudents.filter(student => student.marks>=20)

        }else if(req.params.state ==0){
          const  Allstudents = await Student.find()
          students = Allstudents.filter(student => student.marks<20)
          title="THE TABLE DISORGANIZED STUDENTS WITH BELOW 50% OF DESCIPLINE MARKS "
        }else{
         return res.status(400).json({ message: "Invalid State" })
        };
        const numberAll = students.length;
        return res.status(200).json({ students, numberAll,title});
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
//Router to get all students in a specific Level
router.get('/level/:level', async (req, res) => {
    try {
        const level = req.params.level;
        const students = await Student.find({ class: level });
        const numberAll = students.length;
        return res.status(200).json({ students, numberAll,title:`THE TABLE OF ALL STUDENTS in LEVEL ${level}` });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
// Route to get a student by ID from the parameters
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findById(id);
        if (!student) return res.status(404).json({ msg: "Student is not found" });
        return res.status(200).json({ student, msg: "Student returned" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

// Route to update student
router.put('/:id', async (req, res) => {
    const { deductionMarks,deductionComment } = req.body;
    try {
        const id = req.params.id;

        // Fetch the student document from the database
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ msg: "Student is not found" });
        }

        // Ensure that 'marks' is defined and is a valid number
        if (deductionMarks > 0 && deductionMarks<=student.marks && deductionMarks) {
            // if conditions are fullfilled Update 'marks' by deducting 'deductionMarks'
            student.marks -= deductionMarks;
            // Save the updated student
            await student.save();
            return res.status(200).json({ student, msg: "Student updated" });
        }
        return res.status(400).json({ msg: "Invalid marks value ,Put valid marks to deduce" });
        
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});


// Route to delete student
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findByIdAndDelete(id);
        if (!student) return res.status(404).json({ msg: "Student is not found" });
        return res.status(200).json({ msg: "Student deleted" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

module.exports = router;
