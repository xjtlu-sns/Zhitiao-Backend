const mongoose = require('mongoose');
const schema = mongoose.Schema;
/*  user: ObjectId for user
    content: the content of message
    location: loaction of user
    tag: tag of user
    anony: whether anony
    createAt: create time of the message(automatic setting)
    imgUrl: url of image that user upload
*/
const MessageModel = schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content: String,
    location: String,
    tag: [{
        type: String,
        _id:false,
    }],
    anony: String,
    createAt:{
        type:String,
        default:Date.now,
    } ,
    imgUrl: [{
        type: String,
        _id:false,
    }],
});


const Message = mongoose.model('Message', MessageModel);

module.exports = Message;

