const mongoose = require('mongoose');
const Company = require('../Models/CompanyModel');

// Create a new company
exports.createCompany = async (req, res) => {
    try {
        const newCompany = new Company(req.body);
        await newCompany.save();

        res.status(201).json({
            status:201,
            message: 'Company created successfully',
            data: newCompany
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null
        });
    }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided
        const skip = (page - 1) * limit;

        const totalItems = await Company.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);

        const companies = await Company.find().skip(skip).limit(limit);

        res.status(200).json({
            status: 200,
            message: 'Companies retrieved successfully',
            data: companies,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};

// Get a specific company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({
                status: 404,
                message: 'Company not found',
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Company retrieved successfully',
            data: company
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};

// Update a specific company by ID
exports.updateCompany = async (req, res) => {
    const { company_id} = req.body;
    try {
        const existingCompany = await Company.findById(req.params.id);

        if (!existingCompany) {
            return res.status(404).json({
                status: 404,
                message: 'Company not found',
                data: null
            });
        }
        // if (company_id && company_id !== existingCompany.company_id) {
        //     await isCompanyIdUnique(company_id);  // Ensure unique ID if updated
        // }

        Object.assign(existingCompany, req.body);
        const updatedCompany = await existingCompany.save();

        res.status(200).json({
            status: 200,
            message: 'Company updated successfully',
            data: updatedCompany
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null
        });
    }
};

// Delete a specific company by ID
exports.deleteCompany = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid ID format',
                data: null
            });
        }

        const deletedCompany = await Company.findByIdAndDelete(id);
        if (!deletedCompany) {
            return res.status(404).json({
                status: 404,
                message: 'Company not found',
                data: null
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Company deleted successfully',
            data: deletedCompany
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};
