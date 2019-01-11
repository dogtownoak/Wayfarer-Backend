const express = require('express')
const router = express.Router()

const mongoose = require('../models/Cities')
const Cities = mongoose.model('Cities')

router.get('/cities', (req, res) => {
    Cities.find({})
        .then(city => res.json(cities))
})

module.exports = router