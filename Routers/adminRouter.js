// router/adminRouter.js
const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

// Create a new admin
router.post('/', adminController.createAdmin);

// Get all admins
router.get('/', adminController.getAllAdmins);

// Get a specific admin by ID
router.get('/:id', adminController.getAdminById);

// Update a specific admin by ID
router.put('/:id', adminController.updateAdmin);

// Delete a specific admin by ID
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
