const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/WAYFARER-BACKEND")
  .then(connection => console.log("Connection established!"))
  .catch(err => console.log("Connection failed!", err));

const City = require("./City");
const User = require("./User");
const Comments = require("./Comments");
const Post = require("./Post");

module.exports = { City, User, Comments, Post };
