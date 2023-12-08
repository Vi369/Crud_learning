const express = require('express');
const {home} = require('../controllers/userControler.js');
const router = express.Router();

router.get('/',home);

module.exports = router;