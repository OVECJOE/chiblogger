const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const comment = new Schema({
    type: {
        type: String,
        enum: ['positive', 'negative'],
        required: true
    },
    user: { type: ObjectId, ref: 'User' },
    post: { type: ObjectId, ref: 'Post' },
    title: { type: String, trim: true, maxLength: 100 },
    content: {
        type: String,
        required: true,
        trim: true,
        maxLength: 500,
        unique: true
    },
    upvoteCount: { type: Number, default: 0 },
    downvoteCount: { type: Number, default: 0 }
}, {
    timestamps: { createdAt: 'createdOn', updatedAt: 'editedOn' }
});

module.exports = mongoose.model('Comment', comment);