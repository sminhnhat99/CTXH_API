const express = require('express');
const router = express.Router();

const userController = require('../controllers/_user.Controller');

router.post("/register", userController.Register);
router.post("/login", userController.Login);
router.get('/read', userController.Read);

module.exports = router;