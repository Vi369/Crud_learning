require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js')
const cors = require('cros');
const app = express();

connectToDb();

app.use(express.json());
app.use(express.urlencoded({extended:this.true}))
app.use(cors());

const userRoutes = require('./routes/userRoutes.js');
app.use('/', userRoutes)

module.exports = app;