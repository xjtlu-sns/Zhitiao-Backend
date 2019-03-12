const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatroomSchema = Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    lastMsg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    },
    createdAt: {
        type: String,
        default: Date.now,
    }
})

const Chatroom = mongoose.model('Chatroom', ChatroomSchema);

module.exports = Chatroom;