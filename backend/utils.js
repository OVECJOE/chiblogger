const jwt = require('jsonwebtoken');

// create a jwt
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

// handle errors during registration
const handleErrors = (err) => {
    let errors = [];

    if (typeof err === 'object') {
        if (err.message && typeof err.errors === 'object') {
            Object.values(err.errors).forEach(({ properties }) => {
                errors.push(properties.message);
            });
        } else if (typeof err.message === 'string') {
            errors.push(err.message);
        }
    }

    if (typeof err === 'string') {
        errors.unshift(err);
    }

    return errors;
};

const generateUserPayload = (user, token) => {
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        isPremium: user.isPremium,
        photo: user.photo,
        token
    }
}

module.exports = {
    createToken,
    handleErrors,
    generateUserPayload
};