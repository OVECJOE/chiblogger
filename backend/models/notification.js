const mongoose = require('mongoose');
const { Schema } = mongoose;
const { isEmail } = require('validator');

const notification = new Schema({
    firstName: {
        type: String, trim: true,
        required: [true, 'Enter your first name please!'],
        maxLength: [100, 'First name must not exceed 100 characters']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please provide a valid email address']
    },
    message: {
        type: String,
        required: [true, 'Where have you found an e-conversation get started with a message dude?'],
        trim: true
    },
    fromSubscriber: { type: Boolean, default: false },
    viewed: { type: Boolean, default: false }
}, {
    timestamps: { createdAt: 'dateSent' }
});

module.exports = mongoose.model('Notification', notification);