
const mongoose = require('mongoose');
const menuschema = require('../schemas/menuschema');
const MenuModel = mongoose.model('menus',menuschema);  // Use the imported schema
module.exports = MenuModel;

 