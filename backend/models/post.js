const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const post = new Schema({
    title: {
        type: String,
        required: [true, 'Article title required'],
        maxLength: [255, 'Title must not exceed 255 characters'],
        trim: true,
        unique: [true, 'Title must be unique']
    },
    creator: { type: ObjectId, ref: 'User' },
    content: {
        type: String,
        required: [true, 'Article content is required'],
        trim: true
    },
    slugName: {
        type: String,
        required: [true, 'Slug Name is required'],
        trim: true,
        unique: [true, 'Slug name must be unique']
    },
    categories: [
        { type: ObjectId, ref: 'Category' }
    ],
    selectedFiles: {
        type: [{
            type: String,
            trim: true,
            required: 'No image selected dude!'
        }],
        validate: [
            arr => arr.length > 0 ? true : false,
            'At least one image must be selected for this article!'
        ]
    },
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