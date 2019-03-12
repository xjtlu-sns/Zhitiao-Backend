const mongoose = require('mongoose')

const schema = mongoose.Schema;

const Like = schema({
    msgId:{
        type: mongoose.Types.ObjectId,
        ref: 'Message'
    },

    comId:
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    },

    userInfo: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    
    createdAt: {
        type: String,
        default: Date.now,   
    },
    
    type: String,
});

const Like = mongoose.model('Like', Like);

module.exports(Like);
