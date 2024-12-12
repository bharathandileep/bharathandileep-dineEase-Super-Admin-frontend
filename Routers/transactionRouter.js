const express = require('express');
const router = express.Router();
const transactionReportsController = require('../Controllers/transactionController');

// CRUD routes
router.get('/', transactionReportsController.getAllTransactionReports);
router.get('/:id', transactionReportsController.getTransactionReportById);
router.post('/', transactionReportsController.addTransactionReport);
router.put('/:id', transactionReportsController.updateTransactionReport);
router.delete('/:id', transactionReportsController.deleteTransactionReport);

module.exports = router;
