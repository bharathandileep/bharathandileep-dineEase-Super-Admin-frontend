const MenuItemModel = require('../Models/MenuItemsModel');
const MenuModel = require('../Models/MenuModel');

// Verify existence of foreign key menu_id
const verifyMenuId = async (menu_id) => {
    const menu = await MenuModel.findOne({ menu_id });
    if (!menu) {
        throw new Error('Menu not found');
    }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItemModel.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItemModel.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.json(menuItem);
    } catch (err) {
        res.status (500).json({ message: err.message });
    }
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
    try {
        const { item_id, menu_id } = req.body;
        await verifyMenuId(menu_id);

        // Check if item_id already exists
        const existingMenuItem = await MenuItemModel.findOne({ item_id });
        if (existingMenuItem) {
            return res.status(400).json({ message: 'item_id already exists' });
        }

        const newMenuItem = new MenuItemModel(req.body);
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific menu item by ID
exports.updateMenuItem = async (req, res) => {
    try {
        const { menu_id } = req.body;
        await verifyMenuId(menu_id);

        const updatedMenuItem = await MenuItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.json(updatedMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific menu item by ID
exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItemModel.findByIdAndDelete(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.json({ message: 'Menu item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
