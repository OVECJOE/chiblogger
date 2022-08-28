const Post = require('../models/post');
const Comment = require('../models/comment');
const Category = require('../models/category');
const { handleErrors } = require('../utils');

exports.create_or_update_article = async (req, res) => {
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
        selectedFiles: articleImages || [],
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
            .populate({ path: 'categories', model: Category })
            .populate({ path: 'comments', model: Comment });

        if (!posts) {
            const errors = handleErrors('Could not get posts; Something went wrong.');
            res.status(500).send(errors);
        } else {
            res.send(posts);
        }
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
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
            const posts = await Post.find({});
            res.send(posts);
        }
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
}

exports.like_article = async (req, res) => {
    const { slugName } = req.params;

    if (req.user.isAdmin) {
        const errors = handleErrors('Admin is not allowed to like articles');
        return res.status(401).send(errors);
    }

    try {
        const post = await Post.findOne({ slugName })
            .populate('creator')
            .populate('comments')
            .populate('categories');

        if (!post) {
            const errors = handleErrors('No article with given slug name');
            return res.status(404).send(errors);
        }

        const hasLikedIdx = post.likers?.indexOf(req.user._id);

        if (hasLikedIdx === -1) {
            post.likers?.push(req.user._id);
        } else {
            post.likers?.splice(hasLikedIdx, 1);
        }
        post.likes = post.likers?.length;

        await post.save();
        res.send(post);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).send(errors);
    }
};