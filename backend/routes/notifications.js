const express = require('express');
const router = express.Router();

const notificationController = require('../controllers/notificationController');
const { requireAuth } = require('../middleware/authMiddleware');

// create notification from contacting admin via contact form on frontend
router.post('/', notificationController.create_notification);
// view notification, if not viewed already
router.put('/:notificationId/view', requireAuth, notificationController.view_notification);
// fetch notifications
router.get('/', requireAuth, notificationController.get_notifications);
// delete notification
router.delete('/:notificationId', requireAuth, notificationController.delete_notification);
// delete notifications
router.delete('/(:viewed)', requireAuth, notificationController.delete_notifications);

module.exports = router;