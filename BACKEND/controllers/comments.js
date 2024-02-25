const express = require('express');
const router = express.Router();
//import the comment model
const Comment = require('../models/comment');

//creating routes that allow us to --
// 1. return all comments
// 2. return a single comment by id
// 3. create a new comment
// 4. update a comment by id
// 5. delete a comment by id

//GET all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//GET a single comment by id
router.get('/:id', (req, res) => { /* what goes inside function */
    const commentId = req.params.id;
    console.log(commentId);
    Comment.findById(commentId)
        .then(comment => {
            res.json({ '--- find comment ---\n': comment });
        })
        .catch(error => {
            console.log('--- read comment... error ---\n', error);
        });
});

//CREATE a new comment
router.post('/new', async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        user: req.body.user,
        blogPost: req.body.blogPost,
    });
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//UPDATE a comment by id
router.patch('/:id', async (req, res) => {
    if (req.body.content != null) {
        res.comment.content = req.body.content;
    }
    if (req.body.user != null) {
        res.comment.user = req.body.user;
    }
    if (req.body.blogPost != null) {
        res.comment.blogPost = req.body.blogPost;
    }
    try {
        const updatedComment = await res.comment.save();
        res.json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//DELETE a comment by id
router.delete('/:id', async (req, res) => {
    try {
        await res.comment.remove();
        res.json({ message: 'Deleted Comment' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;