const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    senderId: { type: Schema.Types.ObjectId, ref: "users" , require: true},
    message: {type: String, require: true, maxlength: 5000},
    memorialId: { type: Schema.Types.ObjectId, ref: "memorials" , require: true},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('comments', CommentSchema)