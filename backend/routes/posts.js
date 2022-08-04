const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { requireAuth } = require('../middleware/authMiddleware');

// create new article
router.post('/new-article', requireAuth, postController.create_new_article);
// get all articles
router.get('/', postController.get_posts);
// delete an article
router.delete('/:id', postController.delete_post);
// like or unlike an article
router.put('/:slugName/:likeAction', postController.like_or_unlike_post);

module.exports = router;