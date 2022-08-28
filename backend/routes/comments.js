const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');
const { requireAuth } = require('../middleware/authMiddleware');

// create new comment
router.post('/create', requireAuth, commentController.create_comment);

module.exports = router;