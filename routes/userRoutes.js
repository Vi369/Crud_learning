const express = require('express');
const {home} = require('../controllers/userControler.js');
const router = express.Router();

router.get('/',home);
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.delete('/deleteuser', deleteUser)

module.exports = router;