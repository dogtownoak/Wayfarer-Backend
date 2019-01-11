// const mongoose = require('mongoose');

// const mongoose = require('../db/connection')

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project-01', { useNewUrlParser: true});

const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/WAYFARER-BACKEND')
    .then(connection => console.log('Connection established!'))
    .catch(err => console.log('Connection failed!', err))

const Cities = require('./Cities');
const User = require('./User');
const Comments = require('./Comments');
const Posts = require('./Posts');

exports.Cities = Cities;
exports.User = User;
exports.Comments = Comments;
exports.Posts = Posts;
