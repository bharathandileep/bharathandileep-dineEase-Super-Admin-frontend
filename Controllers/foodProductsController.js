const Foodproduct = require('../Models/FoodProductModel');
const Kitchen = require('../Models/KitchenModel');

// Get all food products with pagination
exports.getAllFoodproducts = async (req, res) => {
    
    try {
        const { page = 1, limit = 8 } = req.query;
        const skip = (page - 1) * limit;
 
        const foodproducts = await Foodproduct.find()
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .exec();
 
        const totalFoodproducts = await Foodproduct.countDocuments();
 
        res.json({
            status: '200 ',
            message: 'Food products retrieved successfully',
            foodproducts,
            pagination: {
                totalItems: totalFoodproducts,
                totalPages: Math.ceil(totalFoodproducts / limit),
                currentPage: parseInt(page),
            },
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a food product by ID
exports.getFoodproductById = async (req, res) => {
    try {
        const foodproduct = await Foodproduct.findById(req.params.id);
        if (!foodproduct) return res.status(404).json({ message: 'Food product not found' });
        res.json(foodproduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
};

// Add a new food product
exports.addFoodproduct = async (req, res) => {
    try {
        // Check if the kitchen_id exists in the kitchens collection
        const kitchen = await Kitchen.findOne({ _id: req.body.kitchen_id });
        if (!kitchen) {
            return res.status(400).json({ message: 'error kitchen_id' });
        }

        const foodproduct = new Foodproduct(req.body);
        const newFoodproduct = await foodproduct.save();
        // res.json({
        //     status: '200 Ok',
        //     message: 'Food product added successfully',
        //     data: newFoodproduct
        // })
        res.status(201).json(newFoodproduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// // Update a food product by ID
// exports.updateFoodproduct = async (req, res) => {
//     const { company_id } = req.body;

//     try {
//         const existingCompany = await Company.findById(req.params.id);
//         if (!existingCompany) {
//             return res.status(404).json({ message: 'Company not found' });
//         }

//         // if (company_id && company_id !== existingCompany.company_id) {
//         //     await isCompanyIdUnique(company_id);
//         // }

//         Object.assign(existingCompany, req.body);
//         const updatedCompany = await existingCompany.save();
//         res.status(200).json(updatedCompany);

// Update a food product by ID
exports.updateFoodproduct = async (req, res) => {
    try {
        // Check if the kitchen_id exists in the kitchens collection
        if (req.body.kitchen_id) {
            const kitchen = await Kitchen.findOne({ _id: req.body.kitchen_id });
            if (!kitchen) {
                return res.status(400).json({ message: 'Invalid kitchen_id' });
            }
        }

        const foodproduct = await Foodproduct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!foodproduct) return res.status(404).json({ message: 'Food product not found' });
        res.json(foodproduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a food product by ID
exports.deleteFoodproduct = async (req, res) => {
    try {
        const foodproduct = await Foodproduct.findByIdAndDelete(req.params.id);
        if (!foodproduct) return res.status(404).json({ message: 'Food product not found' });
        // res.json({
        //     status: '200 Ok',
        //     message: 'Food product deleted successfully',
        //     data: foodproduct
        //     })
        res.json({ message: 'Food product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};