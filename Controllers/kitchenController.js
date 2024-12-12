const mongoose = require('mongoose');
const Order = require('../Models/OrderDetailModel');
const Kitchen = require('../Models/KitchenModel');

// Function to check for duplicate kitchen_id
const checkDuplicateKitchenId = async (kitchen_id) => {
    const existingKitchen = await Kitchen.findOne({ kitchen_id });
    return existingKitchen ? true : false;
};

// Create a new kitchen
exports.createKitchen = async (req, res) => {
    try {
        const newKitchen = new Kitchen(req.body);
        await newKitchen.save();
        res.status(201).json({
            status: 201,
            message: 'Kitchen created successfully',
            data: newKitchen,
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null,
        });
    }
};

// Get all kitchens
exports.getAllKitchens = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided
        const skip = (page - 1) * limit;
    
        const totalItems = await Kitchen.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
    
        const kitchens = await Kitchen.find().skip(skip).limit(limit);
        res.status(200).json({
            status: 200,
            message: 'Kitchens retrieved successfully',
            data: kitchens,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                itemsPerPage: limit,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null,
        });
    }
};

// Get a specific kitchen by ID
exports.getKitchenById = async (req, res) => {
    try {
        const kitchen = await Kitchen.findById(req.params.id);
        if (!kitchen) {
            return res.status(404).json({
                status: 404,
                message: 'Kitchen not found',
                data: null,
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Kitchen retrieved successfully',
            data: kitchen,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null,
        });
    }
};

// Update a specific kitchen by ID
exports.updateKitchen = async (req, res) => {
    try {
        const updatedKitchen = await Kitchen.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedKitchen) {
            return res.status(404).json({
                status: 404,
                message: 'Kitchen not found',
                data: null,
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Kitchen updated successfully',
            data: updatedKitchen,
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null,
        });
    }
};

// Delete a specific kitchen by ID
exports.deleteKitchen = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid ID format',
                data: null,
            });
        }

        const deletedKitchen = await Kitchen.findByIdAndDelete(id);
        if (!deletedKitchen) {
            return res.status(404).json({
                status: 404,
                message: 'Kitchen not found',
                data: null,
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Kitchen deleted successfully',
            data: deletedKitchen,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null,
        });
    }
};
