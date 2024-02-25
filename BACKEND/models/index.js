require('dotenv').config();
const mongoose = require('mongoose');
// import all models
const blogPost = require('./blogPost');
const comment = require('./comment');
const user = require('./user');

console.log('mongo uri =>', process.env.MONGO_URI);

module.exports = {    
    blogPost,
    comment,
    user    
}