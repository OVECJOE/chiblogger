const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { handleErrors } = require('../utils');


const requireAuth = async (req, res, next) => {
    let token, errors;

    if (req.headers.authorization?.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ');
            // decode token id
            const decoded = jwt.verify(token[1], process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            errors = handleErrors('Not authorized, token failed.');
            res.status(400).send(errors);
        }
    }

    if (!token) {
        errors = handleErrors('Not authorized, no token.');
        res.status(401).send(errors);
    }
};

module.exports = {
    requireAuth,
};