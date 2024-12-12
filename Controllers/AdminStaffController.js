const AdminStaff = require('../Models/AdminStaffModel');

// Create a new admin staff
exports.createAdminStaff = async (req, res) => {
    try {
        const adminStaff = new AdminStaff(req.body);
        await adminStaff.save();

        res.status(201).json({
            status: 201,
            message: 'Admin staff created successfully',
            data: adminStaff
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null
        });
    }
};

// Get all admin staff
exports.getAllAdminStaff = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalItems = await AdminStaff.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);

        const adminStaffs = await AdminStaff.find().skip(skip).limit(limit);

        res.status(200).json({
            status:200,
            message: 'Admin staff retrieved successfully',
            data: adminStaffs,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                itemsPerPage: limit,
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

// Get an admin staff by ID
exports.getAdminStaffById = async (req, res) => {
    try {
        const adminStaff = await AdminStaff.findOne({ admin_staff_id: req.params.id });

        if (!adminStaff) {
            return res.status(404).json({
                status: 404,
                message: 'Admin staff not found',
                data: null
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Admin staff retrieved successfully',
            data: adminStaff
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};

// Update an admin staff by ID
exports.updateAdminStaff = async (req, res) => {
    const { admin_staff_id } = req.body;

    try {
        const existingAdminStaff = await AdminStaff.findById(req.params.id);

        if (!existingAdminStaff) {
            return res.status(404).json({
                status: 404,
                message: 'Admin staff not found',
                data: null
            });
        }

        // if (admin_staff_id && admin_staff_id !== existingAdminStaff.admin_staff_id) {
        //     await isAdminStaffIdUnique(admin_staff_id);  // Ensure unique ID if updated
        // }

        Object.assign(existingAdminStaff, req.body);
        const updatedAdminStaff = await existingAdminStaff.save();

        res.status(200).json({
            status: 200,
            message: 'Admin staff updated successfully',
            data: updatedAdminStaff
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: null
        });
    }
};

// Delete an admin staff by ID
exports.deleteAdminStaff = async (req, res) => {
    try {
        const adminStaff = await AdminStaff.findByIdAndDelete(req.params.id);

        if (!adminStaff) {
            return res.status(404).json({
                status: 404,
                message: 'Admin staff not found',
                data: null
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Admin staff deleted successfully',
            data: adminStaff
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};
