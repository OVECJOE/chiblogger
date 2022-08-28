const bcrypt = require('bcryptjs');

const User = require('../models/user');
const Post = require('../models/post');
const { handleErrors, generateUserPayload, createToken } = require('../utils');

exports.register_user = async (req, res) => {
    const {
        username, email, password
    } = req.body;

    try {
        // create a user
        const user = await User.create({
            username,
            email,
            password
        });
        const token = createToken(user._id);

        if (user) {
            // return the user object as response
            res.status(201).send(generateUserPayload(user, token));
        } else {
            const errors = handleErrors('Failed to Create the User');
            res.status(400).send(errors);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.login_user = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);

        res.send(generateUserPayload(user, token));
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

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

    if (users) {
        res.send(users);
    } else {
        const errors = handleErrors('Could not find users');
        res.status(404).send(errors);
    }
};

exports.update_admin_info = async (req, res) => {
    const { username, email, password } = req.body;
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

        const admin = await User.findOneAndUpdate({ _id: req.user._id, isAdmin: true },
            userFields, { new: true }
        );
        const token = createToken(admin._id);
        res.send(generateUserPayload(admin, token));
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).send(errors);
    }
};

exports.update_admin_photo = async (req, res) => {
    const { photo } = req.body;

    try {
        const admin = await User.findOneAndUpdate({ _id: req.user._id, isAdmin: true },
            { photo: photo }, { new: true }
        );

        if (admin) {
            res.send(generateUserPayload(admin, createToken(admin._id)));
        } else {
            const errors = handleErrors('Admin with given user id not found');
            res.status(404).send(errors);
        }
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).send(errors);
    }
};
