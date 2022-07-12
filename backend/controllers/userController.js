const User = require('../models/user');

exports.get_user = async (req, res) => {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (user) {
        res.send(user);
    } else {
        res.status(404).send(
            {error: 'Could not find user'}
        );
    }
};

exports.get_users = async (req, res) => {
    const users = await User.find({});

    if (user) {
        res.send(users);
    } else {
        res.status(404).send(
            {error: 'Could not get users'}
        );
    }
};