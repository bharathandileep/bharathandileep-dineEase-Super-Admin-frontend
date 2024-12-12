const express = require('express');
const router = express.Router();
const foodProductController = require('../Controllers/foodProductsController');

router.get('/', foodProductController.getAllFoodproducts);
router.get('/:id', foodProductController.getFoodproductById);
router.post('/', foodProductController.addFoodproduct);
router.put('/:id', foodProductController.updateFoodproduct);
router.delete('/:id', foodProductController.deleteFoodproduct);

module.exports = router;
