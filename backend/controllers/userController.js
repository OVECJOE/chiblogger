const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { handleErrors } = require('../utils');

exports.get_user = async (req, res) => {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (user) {
        res.send(user);
    } else {
        const errors = handleErrors('Could not find user');
        res.status(404).send(errors);
    }
};

exports.get_users = async (req, res) => {
    const users = await User.find({});

    if (user) {
        res.send(users);
    } else {
        const errors = handleErrors('Could not find users');
        res.status(404).send(errors);
    }
};

exports.update_admin_info = async (req, res) => {
    const { adminId, username, email, password } = req.body;
    let userFields = {};

    if (username) {
        userFields.username = username;
    }

    if (email) {
        userFields.email = email;
    }

    try {
        if (password) {
            if (password.length >= 8) {
                const salt = await bcrypt.genSalt();
                const encryptedPassword = await bcrypt.hash(password, salt);
                userFields.password = encryptedPassword;
            } else {
                const errors = handleErrors('Password must be at least 8 characters long.');
                return res.status(400).send(errors);
            }
        }

        const admin = await User.findOneAndUpdate({ _id: adminId, isAdmin: true },
            userFields, { new: true }
        );

        res.send(admin);
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).send(errors);
    }
};

exports.update_admin_photo = async (req, res) => {
    const { adminId, photo } = req.body;

    try {
        const admin = await User.findOneAndUpdate({ _id: adminId, isAdmin: true },
            { photo: photo }, { new: true }
        );

        if (admin) {
            res.send(admin);
        } else {
            const errors = handleErrors('Admin with given user id not found');
            res.status(404).send(errors);
        }
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).send(errors);
    }
};