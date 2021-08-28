const express = require('express');
const router = express.Router();
const {checkTokenAdmin} = require('../checkAuthentication/checkAuthentication');

const productController = require('../controllers/_product.Controller');

router.post('/create', checkTokenAdmin, productController.Create);

router.get('/read', productController.Read);

router.patch('/update/:productId', checkTokenAdmin, productController.Update);

router.delete('/delete/:productId', checkTokenAdmin, productController.Delete);

module.exports = router;