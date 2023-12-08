require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js')

const app = express();


connectToDb();

module.exports = app;