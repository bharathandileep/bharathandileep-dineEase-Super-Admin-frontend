

const mongoose = require('mongoose');
const RoleSchema = require('../schemas/AdminRoleSchema');
const RoleModel = mongoose.model('role',RoleSchema);  // Use the imported schema
module.exports = RoleModel;

