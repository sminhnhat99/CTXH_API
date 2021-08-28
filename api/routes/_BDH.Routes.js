const express = require('express');
const router = express.Router();

const BDHController = require('../controllers/_BDH.Controller')

router.get('/read', BDHController.readBDH)

module.exports = router;