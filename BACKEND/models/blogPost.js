const mongoose = require('mongoose');

//create blogPost schema
const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String
}, { timestamps: true });

//create the model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

//export the model
module.exports = BlogPost;