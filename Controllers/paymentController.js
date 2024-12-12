const PaymentModel = require('../Models/PaymentModel');
const CustomerModel = require('../Models/CustomerModel');
const OrderDetailModel = require('../Models/OrderDetailModel');

// Verify existence of customer and order
const verifyForeignKeys = async (cust_id, order_id) => {
    const customer = await CustomerModel.findOne({ cust_id });
    const orderDetail = await OrderDetailModel.findOne({ order_id });

    if (!customer) {
        throw new Error('Customer not found');
    }
    if (!orderDetail) {
        throw new Error('Order not found');
    }
};

// Get all payment details
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await PaymentModel.find();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific payment detail by ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await PaymentModel.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Check for unique payment_id
const checkUniquePaymentId = async (payment_id) => {
    const existingPayment = await PaymentModel.findOne({ payment_id });
    if (existingPayment) {
        throw new Error('payment_id must be unique');
    }
};

// Add a new payment detail
exports.addPayment = async (req, res) => {
    const { cust_id, order_id, payment_id } = req.body;

    try {
        await verifyForeignKeys(cust_id, order_id);
        await checkUniquePaymentId(payment_id);

        const newPayment = new PaymentModel(req.body);
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific payment detail by ID
exports.updatePaymentById = async (req, res) => {
    const { cust_id, order_id, payment_id } = req.body;

    try {
        if (cust_id || order_id) {
            await verifyForeignKeys(cust_id, order_id);
        }
        
        if (payment_id) {
            await checkUniquePaymentId(payment_id);
        }

        const updatedPayment = await PaymentModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedPayment) return res.status(404).json({ message: 'Payment not found' });
        res.json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific payment detail by ID
exports.deletePaymentById = async (req, res) => {
    try {
        const payment = await PaymentModel.findByIdAndDelete(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.json({ message: 'Payment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
