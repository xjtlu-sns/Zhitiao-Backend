const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * fromUser: The user who invoked
 * toUser: The user who received
 * type: The category of notification
 * relatedMsg: The related message
 * relatedCom: The related comment
 * isRead: The flag reflects whether the message has been read
 * createdAt: When the notification created
 */

const NotificationSchema = Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    type: String,
    relatedMsg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    relatedCom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    isRead: boolean,
    createdAt: {
        type: String,
        default: Data.now,
    },
})

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;
