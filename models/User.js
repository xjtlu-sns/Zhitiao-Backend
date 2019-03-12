const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = schema({
    openId: String,
    unionld: String,
    userInfo: {
        nickName: String,
        gender: Number,
        city: String,
        language: String,
        province: String,
        country: String,
        avatarUrl: String,
    },
    createdAt: {
        type: String,
        default: Date.now,
    },
});

// openId: 小程序的，每一个有多个
// unionId: 每个人一个
// userInfo: 个人信息
// createdAt: 创建时间

const User = mongoose.model('User', UserSchema);

module.exports = User;