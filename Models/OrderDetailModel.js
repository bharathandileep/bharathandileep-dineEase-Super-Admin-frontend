

const mongoose = require('mongoose');
const orderdetailsschema = require('../Schemas/orderdetailsschema');
const OrderdetailModel = mongoose.model('orderdetails',orderdetailsschema);  // Use the imported schema
module.exports = OrderdetailModel;