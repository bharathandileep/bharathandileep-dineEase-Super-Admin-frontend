
const mongoose = require('mongoose');
const customerschema = require('../schemas/customerschema');
const CustomerModel = mongoose.model('Customer', customerschema);  // Use the imported schema
module.exports = CustomerModel;
