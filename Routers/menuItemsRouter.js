const express = require('express');
const router = express.Router();
const menuItemController = require('../Controllers/menuItemsController');

router.get('/', menuItemController.getAllMenuItems);
router.get('/:id', menuItemController.getMenuItemById);
router.post('/', menuItemController.addMenuItem);
router.put('/:id', menuItemController.updateMenuItem);
router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
