const express = require('express');
const router = express.Router();
const adminStaffController = require('../Controllers/AdminStaffController');

router.post('/', adminStaffController.createAdminStaff);
router.get('/', adminStaffController.getAllAdminStaff);
router.get('/:id', adminStaffController.getAdminStaffById);
router.put('/:id', adminStaffController.updateAdminStaff);
router.delete('/:id', adminStaffController.deleteAdminStaff);

module.exports = router;
