const mongoose = require('mongoose');

//create user schema
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
}, { timestamps: true });

//create the model
const User = mongoose.model('User', userSchema);

//export the model
module.exports = User;