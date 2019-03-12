const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Nortification = new Schema({
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
        default: DataCue.now,
    },
})