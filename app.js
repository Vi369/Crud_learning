require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js')
const {home} = require('./controllers/userControler.js')
const app = express();

connectToDb();

const userRoutes = require('./routes/userRoutes.js');
app.use('/', userRoutes)

module.exports = app;