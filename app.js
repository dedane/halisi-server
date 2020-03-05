const express = require('express');

const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');



app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

module.exports = app;