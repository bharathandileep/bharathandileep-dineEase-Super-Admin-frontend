const OrderItemsModel = require('../Models/OrderItemsModel');
const OrdersModel = require('../Models/OrdersModel');
const MenuItemModel = require('../Models/MenuItemsModel');

// Verify existence of foreign keys
const verifyForeignKeys = async ({ order_id, item_id }) => {
    const order = await OrdersModel.findById({ order_id });
    if (!order) {
        throw new Error('Order not found');
    }

    const menuItem = await MenuItemModel.findOne({ item_id });
    if (!menuItem) {
        throw new Error('Menu item not found');
    }
};

// Get all order items
exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItemsModel.find();
        res.json(orderItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific order item by ID
exports.getOrderItemById = async (req, res) => {
    try {
        const orderItem = await OrderItemsModel.findById(req.params.id);
        if (!orderItem) return res.status(404).json({ message: 'Order item not found' });
        res.json(orderItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new order item
exports.addOrderItem = async (req, res) => {
    try {
        const { order_item_id, order_id, item_id } = req.body;
        await verifyForeignKeys({ order_id, item_id });

        // Check if order_item_id already exists
        const existingOrderItem = await OrderItemsModel.findOne({ order_item_id });
        if (existingOrderItem) {
            return res.status(400).json({ message: 'order_item_id already exists' });
        }

        const newOrderItem = new OrderItemsModel(req.body);
        const savedOrderItem = await newOrderItem.save();
        res.status(201).json(savedOrderItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific order item by ID
exports.updateOrderItem = async (req, res) => {
    try {
        const { order_id, item_id } = req.body;
        await verifyForeignKeys({ order_id, item_id });

        const updatedOrderItem = await OrderItemsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrderItem) return res.status(404).json({ message: 'Order item not found' });
        res.json(updatedOrderItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific order item by ID
exports.deleteOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItemsModel.findByIdAndDelete(req.params.id);
        if (!orderItem) return res.status(404).json({ message: 'Order item not found' });
        res.json({ message: 'Order item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
