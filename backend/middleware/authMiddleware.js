const { handleErrors } = require('../utils');

const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists and is verified
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN,
            (err) => {
                if (err) {
                    errors = handleErrors(err);
                    res.status(400).send({ errors });
                } else {
                    next();
                }
        });
    } else {
        res.status(400).send({
            errors: {message: 'Could not verify user identity, login.'}
        });
    }
};

module.exports = {
    requireAuth,
};