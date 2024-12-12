const express = require('express');
const router = express.Router();
const kitchenController = require('../Controllers/kitchenController');

// Create a new kitchen
router.post('/', kitchenController.createKitchen);

// Get all kitchens
router.get('/', kitchenController.getAllKitchens);

// Get a specific kitchen by ID
router.get('/:id', kitchenController.getKitchenById);

// Update a specific kitchen by ID
router.put('/:id', kitchenController.updateKitchen);

// Delete a specific kitchen by ID
router.delete('/:id', kitchenController.deleteKitchen);

module.exports = router;
