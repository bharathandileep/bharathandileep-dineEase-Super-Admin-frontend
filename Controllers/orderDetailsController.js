const mongoose = require('mongoose'); 
const OrderDetailModel = require('../models/OrderDetailModel');
const { successResponse, errorResponse } = require("../utils/responseFormatter");

// Check if order_id is unique
const isOrderIdUnique = async (order_id) => {
    const existingOrder = await OrderDetailModel.findOne({ order_id });
    if (existingOrder) {
        throw new Error('order_id must be unique');
    }
};

exports.getAllOrderDetails = async (req, res) => {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 4;
      const skip = (page - 1) * limit;
  
      const totalItems = await OrderDetailModel.countDocuments();
      const orders = await OrderDetailModel.find().skip(skip).limit(limit);
      const totalPages = Math.ceil(totalItems / limit);
  
      res.status(200).json({
        status: 200,
        message: 'Orders retrieved successfully',
        data: orders,
        pagination: {
          totalItems,
          totalPages,
          currentPage: page,
          itemsPerPage: limit
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
        data: null
      });
    }
};

// Get a specific order detail by ID
exports.getOrderDetailById = async (req, res) => {
    try {
        const orderDetail = await OrderDetailModel.findById(req.params.id);
        if (!orderDetail) {
            return res.status(404).json({
                status: 404,
                message: 'Order detail not found',
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Order detail retrieved successfully',
            data: orderDetail
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
};

// Add a new order detail
exports.addOrderDetail = async (req, res) => {
    try {
        const { order_id, employee_id, food_id, ...rest } = req.body;

        const orderData = {
            order_id,
            employee_id: new mongoose.Types.ObjectId(employee_id),
            food_id: new mongoose.Types.ObjectId(food_id),
            ...rest
        };

        const newOrderDetail = new OrderDetailModel(orderData);
        const savedOrderDetail = await newOrderDetail.save();

        res.status(201).json({
            status: 201,
            message: 'Order detail added successfully',
            data: savedOrderDetail
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null
        });
    }
};

// Update a specific order detail by ID
exports.updateOrderDetailById = async (req, res) => {
    try {
        const updatedOrderDetail = await OrderDetailModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrderDetail) {
            return res.status(404).json({
                status: 404,
                message: 'Order detail not found',
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Order detail updated successfully',
            data: updatedOrderDetail
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: null
        });
    }
};

// Delete a specific order detail by ID
exports.deleteOrderDetailById = async (req, res) => {
    try {
        const orderDetail = await OrderDetailModel.findByIdAndDelete(req.params.id);
        if (!orderDetail) {
            return res.status(404).json({
                status: 404,
                message: 'Order detail not found',
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Order detail deleted successfully',
            data: null
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
};
