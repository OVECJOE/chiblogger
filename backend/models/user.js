const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');
const { Schema } = mongoose;


const user = new Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please enter a username'],
        minLength: 4,
        maxLength: 255,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        unique: true,
        minLength: [8, 'Minimum password length is 8 characters'],
        maxLength: [255, 'Maximum password length is 255 characters']
    },
    isAdmin: { type: Boolean, default: false },
    isPremium: { type: Boolean, default: false },
    bio: { type: String, maxLength: 2000, trim: true },
    photo: { data: Buffer, contentType: String }
}, {
    timestamps: { createdAt: 'subscribedOn' },
});

user.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(
        this.password,
        salt
    );
    next();
});

user.statics.login = async function(username, password) {
    const user = await this.findOne({ username });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('Incorrect Password');
    }
    throw Error('Incorrect Username');
};

const User = mongoose.model('User', user);

module.exports = User;