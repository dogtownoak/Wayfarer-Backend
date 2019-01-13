const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  timestamp: String
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
