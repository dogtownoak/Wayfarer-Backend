const express = require('express')
const router = express.Router()

const mongoose = require('../models/Comments')
const Comments = mongoose.model('Comments')

router.get('/comments', (req, res) => {
    Comments.find({})
        .then(comment => res.json(comments))
})

module.exports = router