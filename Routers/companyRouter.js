const express = require('express');
const router = express.Router();
const companyController = require('../Controllers/companyController'); // Adjust the path if needed

// Create a new company
router.post('/', companyController.createCompany);

// Get all companies
router.get('/', companyController.getAllCompanies);

// Get a specific company by ID
router.get('/:id', companyController.getCompanyById);

// Update a specific company by ID
router.put('/:id', companyController.updateCompany);

// Delete a specific company by ID
router.delete('/:id', companyController.deleteCompany);

module.exports = router;
