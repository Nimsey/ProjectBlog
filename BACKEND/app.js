const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config(); // Load environment variables
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

const methodOverride = require('method-override');
const buildPath = path.join(__dirname, '..', 'build');
const db = require('./database');
const MONGO_URI = process.env.MONGO_URI;
console.log('mongo uri =>', MONGO_URI);

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static(buildPath));
app.use(methodOverride('_method'));

//routes
const userRoutes = require('./controllers/users');
const blogPostRoutes = require('./controllers/blogPosts');
const commentRoutes = require('./controllers/comments');

//rout apps
app.use('/users', userRoutes);
app.use('/blogPosts', blogPostRoutes);
app.use('/comments', commentRoutes);


//routes
app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to My Blog' });
});

//PORT
app.listen(PORT, () => {
    console.log(`Server connected to PORT: ${PORT}`);
});

module.exports = app;