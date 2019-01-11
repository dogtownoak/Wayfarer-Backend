const express = require('express')
const router = express.Router()

const mongoose = require('../models/Posts')
const Posts = mongoose.model('Posts')

router.get('/posts', (req, res) => {
    Posts.find({})
        .then(post => res.json(posts))
})

module.exports = router