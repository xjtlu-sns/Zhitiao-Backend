const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CommentModel = schema({
    msgId: {
        type: mongoose.Types.ObjectId,
        ref: 'Message',
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    targetCom: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    },
    created_at: {
        type: String,
        default: Date.now,
    },
    id: String,
    content: String,
    anony: String,
    created: String,
})

const Comment = mongoose.model('Comment', CommentModel);

module.exports = Comment;