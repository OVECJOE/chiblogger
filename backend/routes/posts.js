const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { requireAuth } = require('../middleware/authMiddleware');

// create new article
router.post('/create_or_update', requireAuth, postController.create_or_update_article);
// get all articles
router.get('/', postController.get_posts);
// delete an article
router.delete('/:id', requireAuth, postController.delete_post);
// like or unlike an article
router.put('/:slugName/like', requireAuth, postController.like_article);

module.exports = router;