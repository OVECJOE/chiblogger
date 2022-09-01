const Notification = require('../models/notification');
const User = require('../models/user');

const { handleErrors } = require('../utils');

const isNotAdminAndBackfire = user => {
    if (!user.isAdmin) {
        throw new Error('How dare you? Not an admin!');
    }
};

exports.create_notification = async (req, res) => {
    const { firstName, email, message } = req.body;
    const notificationData = {
        firstName, email, message
    };

    try {
        const isSubscriber = await User.findOne({ email });
        //set 'fromSubscriber' property based on result
        notificationData.fromSubscriber = isSubscriber ? true : false;

        const notification = await Notification.create(notificationData);

        if (notification) {
            res.status(201).send({
                notificationId: notification._id,
                isSubscriber: notification.fromSubscriber,
                message: 'Message Successfully Delivered.'
            });
        } else {
            throw new Error('Could not notify admin; Something went wrong!');
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.view_notification = async (req, res) => {
    const { notificationId } = req.params;

    try {
        // throw error if user is not admin
        isNotAdminAndBackfire(req.user);

        const notification = await Notification.findByIdAndUpdate(notificationId,
            { viewed: true }, { new: true }
        );

        if (!notification) {
            throw new Error('Notification does not exist or is already deleted.');
        } else {
            res.send(notification);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.get_notifications = async (req, res) => {
    try {
        // throw error if user is not admin
        isNotAdminAndBackfire(req.user);

        const notifications = await Notification.find({});

        if (notifications) {
            res.send(notifications);
        } else {
            const errors = handleErrors('Could not fetch notifications; Something went wrong!');
            res.status(500).send(errors);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.get_notification = async (req, res) => {
    const { notificationId } = req.params;

    try {
        // throw error if user is not admin
        isNotAdminAndBackfire(req.user);

        const notification = await Notification.findById(notificationId);

        if (notification) {
            res.send(notification);
        } else {
            const errors = handleErrors('Could not fetch notification; Given ID is invalid!');
            res.status(404).send(errors);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.delete_notification = async (req, res) => {
    const { notificationId } = req.params;

    try {
        // throw error if user is not admin
        isNotAdminAndBackfire(req.user);

        const notification = await Notification.findByIdAndDelete(notificationId,
            { new: true }
        );

        if (notification) {
            res.send(notification);
        } else {
            throw new Error('Could not find notification, let alone delete it!');
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.delete_notifications = async (req, res) => {
    const { viewed } = req.params;

    try {
        // throw error if user is not admin
        isNotAdminAndBackfire(req.user);

        const { deletedCount } = await Notification.deleteMany(
            viewed === undefined ? {} : { viewed }
        );

        if (!deletedCount) {
            const errors = handleErrors('Could not delete notifications; Something went wrong');
            res.status(500).send(errors);
        } else {
            res.send({
                success: 200,
                message: `Deleted ${deleted.deletedCount} notifications successfully.`
            });
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};