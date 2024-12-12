const express = require('express');
const router = express.Router();
const foodsupplyController = require('../Controllers/foodSupplyController');

// Get all food supplies
router.get('/', foodsupplyController.getAllFoodSupplies);

// Get a specific food supply by ID
router.get('/:id', foodsupplyController.getFoodSupplyById);

// Add a new food supply
router.post('/', foodsupplyController.addFoodSupply);

// Update a specific food supply by ID
router.put('/:id', foodsupplyController.updateFoodSupplyById);

// Delete a specific food supply by ID
router.delete('/:id', foodsupplyController.deleteFoodSupplyById);

module.exports = router;
