
const mongoose = require('mongoose');
const transactionreportsschema = require('../schemas/transactionreportsschema');
const TransactionReportsModel = mongoose.model('transactionreports',transactionreportsschema);// Use the imported schema
module.exports = TransactionReportsModel;
