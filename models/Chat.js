const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ChatModel = schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    createdAt: {
        type: String,
        default: Date.now,
    },
});

const Chat = mongoose.model('Chat', ChatModel);

module.exports = Chat;