const mongoose = require('mongoose');
const adminschema = require('../schemas/AdminSchema');
const AdminModel = mongoose.model('admins',adminschema);  // Use the imported schema
module.exports =AdminModel;