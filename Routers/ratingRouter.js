const express = require('express');
const router = express.Router();
const ratingController = require('../Controllers/ratingController');

// Get all rating details
router.get('/', ratingController.getAllRatings);

// Get a specific rating detail by ID
router.get('/:id', ratingController.getRatingById);

// Add a new rating detail
router.post('/', ratingController.addRating);

// Update a specific rating detail by ID
router.put('/:id', ratingController.updateRatingById);

// Delete a specific rating detail by ID
router.delete('/:id', ratingController.deleteRatingById);

module.exports = router;
