const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/paymentController');

// Get all payment details
router.get('/', paymentController.getAllPayments);

// Get a specific payment detail by ID
router.get('/:id', paymentController.getPaymentById);

// Add a new payment detail
router.post('/', paymentController.addPayment);

// Update a specific payment detail by ID
router.put('/:id', paymentController.updatePaymentById);

// Delete a specific payment detail by ID
router.delete('/:id', paymentController.deletePaymentById);

module.exports = router;
