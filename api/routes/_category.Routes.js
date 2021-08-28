const express = require('express');
const router = express.Router();
const {checkTokenAdmin} = require('../checkAuthentication/checkAuthentication');

const categoryController = require('../controllers/_category.Controller');

router.post('/create', categoryController.Create);

router.get('/read', categoryController.Read);

router.patch('/update/:categoryId', categoryController.Update);

router.delete('/delete/:categoryId', categoryController.Delete);

module.exports = router;