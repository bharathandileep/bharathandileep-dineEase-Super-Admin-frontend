
const mongoose = require('mongoose');
const AdminRoleSchema = require('../schemas/AdminRoleSchema');
const AdminRoleModel = mongoose.model('AdminRole',AdminRoleSchema);  // Use the imported schema
module.exports = AdminRoleModel;
