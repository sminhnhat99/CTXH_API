const express = require('express');
const router = express.Router();

const eventController = require('../controllers/_event.Controller');

router.post('/create', eventController.Create);

router.get('/read/', eventController.Read);

router.delete('/delete/:eventId', eventController.Delete);

router.patch('/edit/:eventId', eventController.Edit);

module.exports = router;