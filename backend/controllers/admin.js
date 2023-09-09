const router = require('express').Router();
const Admin = require('../Modles/Admin'); // Assuming the correct path

// Route to save a new Admin
router.post('/', async (req, res) => {
    const { name, password } = req.body;
    try {
        const admin = await Admin.findOne({ fullname:name });
        if (admin) {
            return res.status(401).json({ message: "New Admin already exists" });
        }
        const newAdmin = new Admin({
            fullname: name,
            password
        });
        await newAdmin.save();
        return res.status(201).json({ message: "New Admin saved" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Router to update admin
router.put('/:id', async (req, res) => {
    const { name, password } = req.body;
    try {
        const id = req.params.id;
        const admin = await Admin.findByIdAndUpdate(id, {
            fullname: name,
            password
        });
        if (!admin) {
            return res.status(404).json({ message: "Admin is not found" });
        }
        return res.status(201).json({ message: "Admin updated" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Router to delete Admin
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await Admin.findByIdAndDelete(id);
        if (!admin) {
            return res.status(404).json({ message: "Admin is not found" });
        }
        return res.status(200).json({ message: "Admin deleted" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
