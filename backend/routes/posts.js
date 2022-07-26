const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { requireAuth } = require('../middleware/authMiddleware');

// create new article
router.post('/new-article', requireAuth, postController.create_new_article);
// get all articles
router.get('/', requireAuth, postController.get_posts);

module.exports = router;