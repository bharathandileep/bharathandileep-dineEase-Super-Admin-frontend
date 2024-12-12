const FoodsupplyModel = require('../Models/FoodSupplyModel');

// Get all food supplies
exports.getAllFoodSupplies = async (req, res) => {
    try {
        const foodSupplies = await FoodsupplyModel.find();
        res.json(foodSupplies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific food supply by ID
exports.getFoodSupplyById = async (req, res) => {
    try {
        const foodSupply = await FoodsupplyModel.findById(req.params.id);
        if (!foodSupply) return res.status(404).json({ message: 'Food supply not found' });
        res.json(foodSupply);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new food supply
exports.addFoodSupply = async (req, res) => {
    try {
        // Ensure supply_id is unique
        const existingSupply = await FoodsupplyModel.findOne({ supply_id: req.body.supply_id });
        if (existingSupply) {
            return res.status(400).json({ message: 'supply_id must be unique' });
        }

        const newFoodSupply = new FoodsupplyModel(req.body);
        const savedFoodSupply = await newFoodSupply.save();
        res.status(201).json(savedFoodSupply);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a specific food supply by ID
exports.updateFoodSupplyById = async (req, res) => {
    try {
        const updatedFoodSupply = await FoodsupplyModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedFoodSupply) return res.status(404).json({ message: 'Food supply not found' });
        res.json(updatedFoodSupply);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific food supply by ID
exports.deleteFoodSupplyById = async (req, res) => {
    try {
        const foodSupply = await FoodsupplyModel.findByIdAndDelete(req.params.id);
        if (!foodSupply) return res.status(404).json({ message: 'Food supply not found' });
        res.json({ message: 'Food supply deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
