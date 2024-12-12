
const mongoose = require('mongoose');
const foodsupplyschema = require('../schemas/foodsupplyschema');
const FoodsupplyModel = mongoose.model('foodsupplys',foodsupplyschema);  // Use the imported schema
module.exports = FoodsupplyModel;
