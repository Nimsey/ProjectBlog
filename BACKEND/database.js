// db.js
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose is connected');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

module.exports = mongoose;