const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { requireAuth } = require('../middleware/authMiddleware');

// register user endpoint
router.post('/register', authController.register);
// login user endpoint
router.post('/login', authController.login);
// logout user endpoint
router.post('/logout', authController.logout);
// get user endpoint
router.get('/:username', requireAuth, userController.get_user);
router.get('/users', requireAuth, userController.get_users);

module.exports = router;