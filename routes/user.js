const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/create-user', userController.createUser);
router.post('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);
router.get('/get-user/:id', userController.getOneUser);

module.exports = router;