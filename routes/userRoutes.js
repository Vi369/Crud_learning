const express = require('express');
const {home, createUser, getUsers, editUser, deleteUser} = require('../controllers/userControler.js');
const router = express.Router();

router.get('/',home);
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.put('/updateuser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router;