const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { requireAuth } = require('../middleware/authMiddleware');

// register user endpoint
router.post('/register', authController.register);
// login user endpoint
// register user endpoint
router.post('/login', authController.login);
// logout user endpoint
router.get('/logout', authController.logout);
// get user endpoint
router.get('/:username', requireAuth, userController.get_user);
// get all users endpoint
router.get('/users', requireAuth, userController.get_users);
// update admin info
router.post('/update-admin', requireAuth, userController.update_admin_info);
// upload admin photo
// register user endpoint
router.post('/upload-photo', requireAuth, userController.update_admin_photo);

// register user endpoint
module.exports = router;