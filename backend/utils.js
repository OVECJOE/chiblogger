const jwt = require('jsonwebtoken');

// create a jwt
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: '3d'
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

module.exports = {
    createToken,
    handleErrors,
};