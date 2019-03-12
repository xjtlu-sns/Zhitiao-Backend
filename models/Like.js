const mongoose = require('mongoose')

const schema = mongoose.Schema;

const LikeModel = schema({
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },

    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    
    createdAt: {
        type: String,
        default: Date.now,   
    },
    
    type: String,
});

const Like = mongoose.model('Like', LikeModel);

module.exports = Like;
