const jwt = require('jsonwebtoken');

// create a jwt
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: '3d'
    });
};

// handle errors during registration
const handleErrors = (err) => {
    let errors = {
        username: '',
        email: '',
        password: ''
    };

    // password length < 8
    if (typeof err === 'string') {
        errors.password = err;
    }
    // incorrect username
    if (err.message === 'Incorrect Username') {
        errors.username = 'This username is not registered';
    }

    // incorrect password
    if (err.message === 'Incorrect Password') {
        errors.password = 'Given password is not correct';
    }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'Given email is already registered';
        errors.username = 'Given username is already registered'
    }

    // validation errors
    if (err.message && err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports = {
    createToken,
    handleErrors,
};