const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const activityController = require('../controllers/_activity.Controller');

router.get('/read', activityController.Read);
router.post('/create', activityController.Create);

module.exports = router;

