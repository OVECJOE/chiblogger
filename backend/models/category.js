const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const category = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['popular', 'latest'],
        default: 'latest'
    },
    posts: [
        { type: ObjectId, ref: 'Post' }
    ],
    isActive: { type: Boolean, default: false }
}, {
    timestamps: { createdAt: 'createdOn' }
});

module.exports = mongoose.model('Category', category);