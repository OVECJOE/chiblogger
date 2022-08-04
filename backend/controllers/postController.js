const Post = require('../models/post');
const { handleErrors } = require('../utils');

exports.create_new_article = async (req, res) => {
    const {
        title, slugName,
        articleImages, content,
        premiumRead, creator,
        published, articleId
    } = req.body;

    const newData = {
        title,
        slugName,
        content,
        premiumRead, creator,
        selectedFiles: articleImages ? articleImages : [],
        published
    };

    let post;

    try {
        if (articleId) {
            post = await Post.findOneAndUpdate(
                { _id: articleId },
                newData, { new: true }
            );
        } else {
            post = await Post.create(newData);
        }

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
            .populate('creator')
            // .populate('categories')
            // .populate('comments')
            .exec();

        if (!posts) {
            const errors = handleErrors('Could not get posts; Something went wrong.');
            res.status(500).send(errors);
        } else {
            res.send(posts);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};

exports.delete_post = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.deleteOne({ _id: id });

        if (!post) {
            const errors = handleErrors('Could not delete post.');
            res.status(404).send(errors);
        } else {
            res.send(post);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
}

exports.like_or_unlike_post = async (req, res) => {
    const { slugName, likeAction } = req.params;

    if (likeAction !== 'like' && likeAction !== 'unlike') {
        return;
    }

    try {
        let post = await Post.findOne({ slugName });

        if (!post) {
            throw new Error('Could not find and update post.');
        }

        if (likeAction === 'like') {
            post.likes += 1;
        } else {
            if (post.likes > 0) {
                post.likes -= 1;
            }
        }

        await post.save();
        res.send(post);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};