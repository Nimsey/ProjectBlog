const mongoose = require('mongoose');

//create blogPost schema
const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true });

//create the model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

//export the model
module.exports = BlogPost;