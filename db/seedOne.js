// const mongoose = require('../models/Comments');
// const Comments = mongoose.model('Comment')
// above works with commented outsection below

const db = require("../models");

let comment_list = [
  {
    body: "This is the first comment from this user",
    author: "Jane Smith",
    timestamp: new Date("12-13-2018")
  }
];

db.Comments.deleteMany({}, function(err, comments) {
  console.log("removed all comments");
  db.Comments.create(comment_list, function(err, comments) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("recreated comments");
    console.log("create", `${comments.length}`, "comments");
  });
});
