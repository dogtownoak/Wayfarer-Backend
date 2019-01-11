const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    title: String,
    picture: String,
    body: String,
    author: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})

const Posts = mongoose.model('Posts', PostsSchema)

module.exports = Posts