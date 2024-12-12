const mongoose = require('mongoose');
const AdminStaffSchema = require('../schemas/AdminStaffSchema');
const AdminStaffModel = mongoose.model('AdminStaff',AdminStaffSchema);  // Use the imported schema
module.exports =AdminStaffModel;