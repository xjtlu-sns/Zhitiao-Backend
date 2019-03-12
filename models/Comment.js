const mongoose = require('mongoose');
const schema = mongoose.Schema;
/*  Model for Comment
    msgId: the message that this Comment comments on 
    user: sender of this Comment
    targetCom : the Comment that this Comment comments on
    created_at: create time
    content: Comment text
    anony: this comment is anonymous or not
*/

const CommentModel = schema({
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    targetCom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    created_at: {
        type: String,
        default: Date.now,
    },
    content: String,
    anony: String,
})

const Comment = mongoose.model('Comment', CommentModel);

module.exports = Comment;