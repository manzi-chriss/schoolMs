const router = require('express').Router();
const Student = require('../Models/Student'); // Assuming the correct path

// Route to save a new student
router.post('/', async (req, res) => {
    const { name, regNumber, year, classN, dob, pname, phone } = req.body;
    try {
        const student = await Student.findOne({ regNumber });
        if (student) return res.status(401).json({ message: "User with that Registration Number already exists" });
        
        const newStudent = new Student({
            fullName: name,
            regNumber,
            classN,
            dob,
            parentN: pname,
            parentPhone: phone
        });

        await newStudent.save();
        return res.status(201).json({ message: `Student Added Successfully ${newStudent.fullName}` });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Route to get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        const numberAll = students.length;
        return res.status(200).json({ students, numberAll });
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
    const { name, regNumber, classN, dob, pname, phone } = req.body;
    try {
        const id = req.params.id;
        const student = await Student.findByIdAndUpdate(id, {
            fullName: name,
            regNumber,
            classN,
            dob,
            parentN: pname,
            parentPhone: phone
        });

        if (!student) return res.status(404).json({ msg: "Student is not found" });

        await student.save(); // Save the updated student
        return res.status(200).json({ student, msg: "Student updated" });
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
