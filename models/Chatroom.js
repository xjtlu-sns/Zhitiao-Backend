const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatroomSchema = Schema({
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    lastMsg: {
        type: mongoose.Types.ObjectId,
        ref: 'Chat',
    },
    createdAt: {
        type: String,
        default: Date.now,
    }
})