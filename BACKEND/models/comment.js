const mongoose = require('mongoose');

//create comment schema
const commentSchema = new mongoose.Schema({
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost'
    }
}, { timestamps: true });


//create the model
const Comment = mongoose.model('Comment', commentSchema);

//export the model
module.exports = Comment;