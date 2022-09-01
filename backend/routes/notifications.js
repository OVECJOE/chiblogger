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
// fetch a notification with an ID
router.get('/:notificationId', requireAuth, notificationController.get_notification);
// delete notification
router.delete('/:notificationId', requireAuth, notificationController.delete_notification);
// delete notifications
router.delete('/(:viewed)', requireAuth, notificationController.delete_notifications);

module.exports = router;