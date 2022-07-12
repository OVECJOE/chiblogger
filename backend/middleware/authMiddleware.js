const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists and is verified
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN,
            (err, _) => {
                if (err) {
                    res.redirect('/login');
                } else {
                    next();
                }
        });
    } else {
        res.redirect('/login');
    }
};

module.exports = {
    requireAuth,
};