const TransactionReportsModel = require('../Models/TransactionReportsModel');
const Customer = require('../Models/CustomerModel');
const OrderDetails = require('../Models/OrderDetailModel');
const FoodProducts = require('../Models/FoodProductModel');
const FoodSupply = require('../Models/FoodSupplyModel');

// Verify existence of foreign keys
const verifyForeignKeys = async ({ cust_id, order_id, food_id, supply_id }) => {
    if (cust_id) {
        const customer = await Customer.findOne({ cust_id });
        if (!customer) {
            throw new Error('Customer not found');
        }
    }

    if (order_id) {
        const order = await OrderDetails.findOne({ order_id });
        if (!order) {
            throw new Error('Order not found');
        }
    }

    if (food_id) {
        const food = await FoodProducts.findOne({ food_id });
        if (!food) {
            throw new Error('Food product not found');
        }
    }

    if (supply_id) {
        const supply = await FoodSupply.findOne({ supply_id });
        if (!supply) {
            throw new Error('Food supply not found');
        }
    }
};

// Check for unique trans_id
const isTransIdUnique = async (trans_id, excludeId = null) => {
    const query = { trans_id };
    if (excludeId) {
        query._id = { $ne: excludeId };
    }
    const existingTransaction = await TransactionReportsModel.findOne(query);
    if (existingTransaction) {
        throw new Error('Transaction ID already exists');
    }
};

// Get all transaction reports
exports.getAllTransactionReports = async (req, res) => {
    try {
        const transactionReports = await TransactionReportsModel.find();
        res.json(transactionReports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific transaction report by ID
exports.getTransactionReportById = async (req, res) => {
    try {
        const transactionReport = await TransactionReportsModel.findById(req.params.id);
        if (!transactionReport) return res.status(404).json({ message: 'Transaction report not found' });
        res.json(transactionReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new transaction report
exports.addTransactionReport = async (req, res) => {
    try {
        await verifyForeignKeys(req.body);
        await isTransIdUnique(req.body.trans_id);

        const newTransactionReport = new TransactionReportsModel(req.body);
        const savedTransactionReport = await newTransactionReport.save();
        res.status(201).json(savedTransactionReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific transaction report by ID
exports.updateTransactionReport = async (req, res) => {
    try {
        await verifyForeignKeys(req.body);
        // await isTransIdUnique(req.body.trans_id, req.params.id);

        const updatedTransactionReport = await TransactionReportsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTransactionReport) return res.status(404).json({ message: 'Transaction report not found' });
        res.json(updatedTransactionReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific transaction report by ID
exports.deleteTransactionReport = async (req, res) => {
    try {
        const transactionReport = await TransactionReportsModel.findByIdAndDelete(req.params.id);
        if (!transactionReport) return res.status(404).json({ message: 'Transaction report not found' });
        res.json({ message: 'Transaction report deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
