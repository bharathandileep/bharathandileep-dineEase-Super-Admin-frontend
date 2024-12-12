const Menu = require('../Models/MenuModel');
const Food = require('../Models/FoodProductModel'); 

// Function to check for duplicate menu_id
const checkDuplicateMenuId = async (menu_id) => {
    const existingMenu = await Menu.findOne({ menu_id });
    return existingMenu ? true : false;
};

// Function to check if the food_id exists in the Food collection
const checkValidFoodId = async (food_id) => {
    const validFood = await Food.findOne({ food_id });
    return validFood ? true : false;
};

// Get all menus
exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a menu by ID
exports.getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.json(menu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new menu
exports.addMenu = async (req, res) => {
    try {
        const { menu_id, food_id } = req.body;

        if (await checkDuplicateMenuId(menu_id)) {
            return res.status(400).json({ message: 'menu_id must be unique' });
        }

        if (!await checkValidFoodId(food_id)) {
            return res.status(400).json({ message: 'Invalid food_id' });
        }

        const newMenu = new Menu(req.body);
        const savedMenu = await newMenu.save();
        res.status(201).json(savedMenu);
    } catch (err) { 
        res.status(400).json({ message: err.message });
    }
};

// Update a menu by ID
exports.updateMenu = async (req, res) => {
    try {
        const { menu_id, food_id } = req.body;

        // const existingMenu = await Menu.findOne({ menu_id });
        // if (existingMenu && existingMenu._id.toString() !== req.params.id) {
        //     return res.status(400).json({ message: 'menu_id must be unique' });
        // }

        if (food_id && !await checkValidFoodId(food_id)) {
            return res.status(400).json({ message: 'Invalid food_id' });
        }

        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
        res.json(updatedMenu);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a menu by ID
exports.deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findByIdAndDelete(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.json({ message: 'Menu deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
