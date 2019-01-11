const mongoose = require('mongoose');
Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    body: String,
    author: String,
    timestamp: String
})

const Comments = mongoose.model('Comments', CommentsSchema)

module.exports = Comments