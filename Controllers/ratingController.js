const RatingModel = require('../Models/RatingModel');
const KitchenModel = require('../Models/KitchenModel');

// Verify existence of kitchen
const verifyKitchenId = async (kitchen_id) => {
    const kitchen = await KitchenModel.findOne({ kitchen_id });
    if (!kitchen) {
        throw new Error('Kitchen not found');
    }
};

// Get all rating details
exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await RatingModel.find();
        res.json(ratings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific rating detail by ID
exports.getRatingById = async (req, res) => {
    try {
        const rating = await RatingModel.findById(req.params.id);
        if (!rating) return res.status(404).json({ message: 'Rating not found' });
        res.json(rating);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new rating detail
exports.addRating = async (req, res) => {
    const { kitchen_id } = req.body;

    try {
        await verifyKitchenId(kitchen_id);

        const newRating = new RatingModel(req.body);
        const savedRating = await newRating.save();
        res.status(201).json(savedRating);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific rating detail by ID
exports.updateRatingById = async (req, res) => {
    const { kitchen_id } = req.body;

    try {
        if (kitchen_id) {
            await verifyKitchenId(kitchen_id);
        }

        const updatedRating = await RatingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRating) return res.status(404).json({ message: 'Rating not found' });
        res.json(updatedRating);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific rating detail by ID
exports.deleteRatingById = async (req, res) => {
    try {
        const rating = await RatingModel.findByIdAndDelete(req.params.id);
        if (!rating) return res.status(404).json({ message: 'Rating not found' });
        res.json({ message: 'Rating deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
