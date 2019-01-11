const mongoose = require('../db/connection')

const UserSchema = new Schema({
    
    userName: String,
    about: String,
    currentCity: String,
    profilePic: String,
    joinDate: Date,
    email: { 
		type: String, 
		required: true, 
		unique: true, 
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ,
		},
      password: { type: String, required: true, }


})

const User = mongoose.model('User', UserSchema)

module.exports = User