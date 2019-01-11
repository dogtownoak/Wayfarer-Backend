const mongoose = require('mongoose');
Schema = mongoose.Schema;

const CitiesSchema = new Schema({
    city: String,
    state: String,
    country: String
    // posts: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Posts'
    // }
})

const Cities = mongoose.model('Cities', CitiesSchema)

module.exports = Cities