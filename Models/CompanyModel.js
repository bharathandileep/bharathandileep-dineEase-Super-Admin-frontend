
const mongoose = require('mongoose');
const companyschema = require('../schemas/companyschema');
const CompanyModel = mongoose.model('companies',companyschema);  // Use the imported schema
module.exports = CompanyModel  ;
