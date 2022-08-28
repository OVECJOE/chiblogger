const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { requireAuth } = require('../middleware/authMiddleware');

// register user endpoint
router.post('/register', userController.register_user);
// login user endpoint
router.post('/login', userController.login_user);
// get specific user endpoint
router.get('/:username', requireAuth, userController.get_user);
// get all users endpoint
router.get('/', userController.get_users);
// update admin info
router.post('/update-admin', requireAuth, userController.update_admin_info);
// upload admin photo
router.post('/upload-photo', requireAuth, userController.update_admin_photo);

module.exports = router;