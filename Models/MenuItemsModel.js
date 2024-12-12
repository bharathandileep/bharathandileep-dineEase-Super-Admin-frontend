const mongoose = require('mongoose');
const MenuItemSchema = require('../schemas/MenuItemsSchema');
const MenuItemModel = mongoose.model('MenuItems',MenuItemSchema);  // Use the imported schema
module.exports =MenuItemModel;