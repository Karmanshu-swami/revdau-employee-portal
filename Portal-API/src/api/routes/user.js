// global imports
const express = require('express');


// local imports
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/findOne/:id', UserController.getUserById);
router.get('/findAll', UserController.getAllUser);
// router.post('/changePassword', UserController.changePassword);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);
module.exports = router;
