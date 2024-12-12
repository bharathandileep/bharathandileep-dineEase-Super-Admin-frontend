
const mongoose = require('mongoose');
const foodproductsschema = require('../schemas/foodproductsschema');
const FoodproductModel = mongoose.model('foodproducts',foodproductsschema);  // Use the imported schema
module.exports = FoodproductModel;
