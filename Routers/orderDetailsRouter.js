const express = require('express');
const router = express.Router();
const orderDetailsController = require('../Controllers/orderDetailsController');

// Get all order details
router.get('/', orderDetailsController.getAllOrderDetails);

// Get a specific order detail by ID
router.get('/:id', orderDetailsController.getOrderDetailById);

// Add a new order detail
router.post('/', orderDetailsController.addOrderDetail);

// Update a specific order detail by ID
router.put('/:id', orderDetailsController.updateOrderDetailById);

// Delete a specific order detail by ID
router.delete('/:id', orderDetailsController.deleteOrderDetailById);

module.exports = router;