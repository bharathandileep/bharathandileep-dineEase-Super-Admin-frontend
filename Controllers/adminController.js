const mongoose = require('mongoose');
const Admin = require('../Models/AdminModel');
const Menu = require('../Models/MenuModel');

// // Check if admin_id is unique
// const isAdminIdUnique = async (admin_id) => {
//     const admin = await Admin.findOne({ admin_id });
//     if (admin) {
//         throw new Error('admin_id already exists');
//     }
// };

// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const { menu_id, admin_id } = req.body;

        // Validate menu_id
        const menuExists = await Menu.findOne({ menu_id }); 
        if (!menuExists) {
            return res.status(400).json({ message: 'Invalid menu_id' });
        }

        // Validate admin_id uniqueness
        // await isAdminIdUnique(admin_id);

        const newAdmin = new Admin(req.body);
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific admin by ID
exports.updateAdmin = async (req, res) => {
    try {
        const { menu_id, admin_id } = req.body;

        // Validate menu_id if it is being updated
        if (menu_id) {
            const menuExists = await Menu.findOne({ menu_id });
            if (!menuExists) {
                return res.status(400).json({ message: 'Invalid menu_id' });
            }
        }

        // Validate admin_id uniqueness if it is being updated
        // if (admin_id) {
        //     const existingAdmin = await Admin.findOne({ admin_id });
        //     if (existingAdmin && existingAdmin._id.toString() !== req.params.id) {
        //         return res.status(400).json({ message: 'admin_id already exists' });
        //     }
        // }

        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific admin by ID
exports.deleteAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
