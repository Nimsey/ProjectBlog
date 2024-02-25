const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

const methodOverride = require('method-override');
const buildPath = path.join(__dirname, '..', 'build');

const PORT = process.env.PORT || 8000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static(buildPath));


//routes


//listening port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;