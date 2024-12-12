const Role = require('../Models/AdminRoleModel');

// Create a new role
exports.createRole = async (req, res) => {
    try {
        // Check if the role_id already exists
        // const existingRole = await Role.findOne({ role_id: req.body.role_id });
        // if (existingRole) {
        //     return res.status(400).json({ message: 'Role ID already exists' });
        // }

        const role = new Role(req.body);
        await role.save();
        res.status(201).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all roles
exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a role by ID
exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) {
            return res.status(404).send();
        }
        res.status(200).send(role);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a role by ID
exports.updateRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!role) {
            return res.status(404).send();
        }
        res.status(200).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a role by ID
exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.json({ message: 'Role deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
