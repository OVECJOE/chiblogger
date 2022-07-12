const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const post = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255,
        trim: true,
        unique: true
    },
    creator: { type: ObjectId, ref: 'User' },
    content: { type: String, required: true, trim: true },
    categories: [
        { type: ObjectId, ref: 'Category' }
    ],
    selectedFiles: [
        { data: Buffer, contentType: String }
    ],
    likes: { type: Number, default: 0 },
    published: { type: Boolean, default: false },
    premiumRead: { type: Boolean, default: false },
    comments: [
        { type: ObjectId, ref: 'Comment' }
    ]
}, {
    timestamps: { createdAt: 'createdOn', updatedAt: 'editedOn' }
});

module.exports = mongoose.model('Post', post);