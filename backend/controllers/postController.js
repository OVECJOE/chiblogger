const Post = require('../models/post');
const { handleErrors } = require('../utils');

exports.create_new_article = async (req, res) => {
    const {
        title, slugName,
        articleImages, content,
        premiumRead, creatorId,
        published
    } = req.body;

    try {
        const post = await Post.create({
            title,
            slugName,
            content,
            premiumRead,
            creator: creatorId,
            selectedFiles: articleImages ? articleImages : [],
            published: published
        });

        if (post) {
            res.send(post);
        } else {
            const errors = handleErrors('Article could not be created');
            res.status(500).send({ errors });
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.get_posts = async (req, res) => {
    try {
        const posts = await Post.find({})
        .populate({path: 'users', model: 'User'})
        .populate({path: 'comments', model: 'Comment'})
        .exec();

        if (!posts) {
            const errors = handleErrors('Could not get posts; Something went wrong.');
            res.status(500).send(errors);
        } else {
            console.log(posts);
            res.send(posts);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};