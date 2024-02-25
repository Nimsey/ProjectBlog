const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

const methodOverride = require('method-override');
const buildPath = path.join(__dirname, '..', 'build');



//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static(buildPath));
app.use(methodOverride('_method'));

//routes
app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to My Blog' });
});

//PORT
app.listen(PORT, () => {
    console.log(`Server connected to PORT: ${PORT}`);
});

module.exports = app;