const express = require('express');
const router = express.Router();
//import the blogPost model
const BlogPost = require('../models/blogPost');

//creating routes that allow us to --
// 1. return all blogPosts
// 2. return a single blogPost by id
// 3. create a new blogPost
// 4. update a blogPost by id
// 5. delete a blogPost by id

//GET all blogPosts
router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//display posts with author
router.get('/:id/comments', async (req, res) => {
    const comments = await Comment.find({ blogPost: req.params.id }).populate('user');
    res.json(comments);
});

//GET a single blogPost by id
router.get('/:id', (req, res) => { /* what goes inside function */
    const blogPostId = req.params.id;
    console.log(blogPostId);
    BlogPost.findById(blogPostId)
        .then(blogPost => {
            res.json({ '--- find blogPost ---\n': blogPost });
        })
        .catch(error => {
            console.log('--- read blogPost... error ---\n', error);
        });
});

//CREATE a new blogPost
router.post('/new', async (req, res) => {
    const blogPost = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    });
    try {
        const newBlogPost = await blogPost.save();
        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//UPDATE a blogPost by id
router.patch('/:id', async (req, res) => {
    if (req.body.title != null) {
        res.blogPost.title = req.body.title;
    }
    if (req.body.content != null) {
        res.blogPost.content = req.body.content;
    }
    if (req.body.image != null) {
        res.blogPost.image = req.body.image;
    }
    try {
        const updatedBlogPost = await res.blogPost.save();
        res.json(updatedBlogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//DELETE a blogPost by id
router.delete('/:id', async (req, res) => {
    try {
        await res.blogPost.remove();
        res.json({ message: 'Deleted blogPost' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Make sure to export the router
module.exports = router;