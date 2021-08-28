const express = require('express');
const router = express.Router();
const {checkTokenAdmin} = require('../checkAuthentication/checkAuthentication');

const memberController = require('../controllers/_member.Controller');

router.post('/create', checkTokenAdmin, memberController.Create);

router.get('/show', memberController.Show)

router.delete('/delete/:memberId', checkTokenAdmin, memberController.Delete)

router.patch('/edit/:memberId', memberController.Edit)

router.get('/searchbyId/:memberId', memberController.searchById)

router.get('/searchbyKDV/', memberController.searchByKhoaDV)

router.get('/searchbyName/', memberController.searchbyName)

router.get('/searchbyPosition', memberController.searchByPosition)

router.get('/searchbyRole/', memberController.searchByRole)

module.exports = router;