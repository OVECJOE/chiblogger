const User = require('../models/user');
const { createToken, handleErrors } = require('../utils');

exports.register = async (req, res) => {
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
        // create token
        const token = createToken(user._id);
        // set generated jwt as cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 259200000,
        });
        // return the user object as response
        res.status(201).send(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 259200000,
        });
        res.send(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.logout = (req, res) => {
    // set the jwt cookie to an empty string and
    // give it a very short life span
    res.cookie('jwt', '', {
        httpOnly: true,
        maxAge: 1
    });
    res.send({
        success: 200,
        message: 'Logout Successful'
    });
};