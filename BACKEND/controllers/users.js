const express = require('express');
const router = express.Router();
//import the user model
const { User } = require('../models/user');

//creating routes that allow us to --
// 1. return all users
// 2. return a single user by id
// 3. create a new user
// 4. update a user by id
// 5. delete a user by id

//GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//GET a single user by id
router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
});

//CREATE a new user
router.post('/', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//UPDATE a user by id
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.userName != null) {
        res.user.userName = req.body.userName;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }
    if (req.body.firstName != null) {
        res.user.firstName = req.body.firstName;
    }
    if (req.body.lastName != null) {
        res.user.lastName = req.body.lastName;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//DELETE a user by id
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//export the router
module.exports = router;