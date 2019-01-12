const express = require("express");
const router = express.Router();

const mongoose = require("../models/Post");
const Post = mongoose.model("Post");

router.get("/posts", (req, res) => {
  Post.find({}).then(posts => res.json(posts));
});

module.exports = router;
