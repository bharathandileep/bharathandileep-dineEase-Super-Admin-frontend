const Customer = require('../Models/CustomerModel');

// Check if cust_id is unique
// const isCustIdUnique = async (cust_id) => {
//   const customer = await Customer.findOne({ cust_id });
//   if (customer) {
//     throw new Error('cust_id already exists');
//   }
// };

// Get all customers with pagination
exports.getAllCustomers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided
    const skip = (page - 1) * limit;

    const totalItems = await Customer.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const customers = await Customer.find().skip(skip).limit(limit);
    res.status(200).json({
      status: 200,
      message: 'Customers retrieved successfully',
      data: customers,
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

// Add a new customer
exports.addCustomer = async (req, res) => {
  // const { cust_id } = req.body;

  try {
    // await isCustIdUnique(cust_id);

    const customer = new Customer(req.body);
    const newCustomer = await customer.save();

    res.status(201).json({
      status: 201,
      message: 'Customer created successfully',
      data: newCustomer
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
      data: null
    });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  // const { cust_id } = req.body;

  try {
    const existingCustomer = await Customer.findById(req.params.id);
    if (!existingCustomer) {
      return res.status(404).json({
        status: 404,
        message: 'Customer not found',
        data: null
      });
    }

    // if (cust_id && cust_id !== existingCustomer.cust_id) {
    //   await isCustIdUnique(cust_id);
    // }

    Object.assign(existingCustomer, req.body);
    const updatedCustomer = await existingCustomer.save();

    res.status(200).json({
      status: 200,
      message: 'Customer updated successfully',
      data: updatedCustomer
    });
  } catch (err) {
    res.status(400).json({
      status:400,
      message: err.message,
      data: null
    });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({
        status:404,
        message: 'Customer not found',
        data: null
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Customer deleted successfully',
      data: customer
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
      data: null
    });
  }
};
