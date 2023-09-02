const router = require('express').Router();
const Staff = require('../Models/Staff'); // Assuming the correct path

// Route to save new staff members
router.post('/', async (req, res) => {
    const { name, phone, title, id, responsibility } = req.body;
    try {
        const staff = await Staff.findOne({ phone, id });
        if (staff) {
            return res.status(401).json({ message: "New staff member already exists" });
        }

        const newStaff = new Staff({
            fullName: name,
            phone,
            title,
            id,
            responsibility
        });

        await newStaff.save();
        return res.status(201).json({ msg: "New staff member successfully created" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Route to get all staff members
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find();
        const numberOfStaffMembers = staff.length;
        return res.status(200).json({ staff, numberOfStaffMembers });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Route to get a specific staff member by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const staff = await Staff.findById(id);
        if (!staff) {
            return res.status(404).json({ msg: "Staff is not found" });
        }
        return res.status(200).json({ staff, msg: "Staff returned" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

// Route to update staff information by ID
router.put('/:id', async (req, res) => {
    const { name, phone, title, responsibility } = req.body;
    try {
        const id = req.params.id;
        const staff = await Staff.findByIdAndUpdate(id, {
            fullName: name,
            phone,
            title,
            responsibility
        });
        if (!staff) {
            return res.status(404).json({ msg: "Staff is not found" });
        }
        return res.status(200).json({ staff, msg: "Staff updated" });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

// Route to delete a staff member by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const staff = await Staff.findByIdAndDelete(id);
        if (!staff) {
            return res.status(404).json({ msg: "Staff is not found" });
        }
        return res.status(200).json({ msg: "Staff deleted" });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

module.exports = router;
