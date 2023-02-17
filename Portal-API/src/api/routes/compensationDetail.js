//Created by Rohini on 21st november

// global imports
const express = require('express');

// local imports
const { compensationDetailController } = require('../controllers');
const router = express.Router();

//add compenasation details
router.post('/add', compensationDetailController.addCompensationDetail);
//update compensation details
router.put('/edit/:cd_id', compensationDetailController.updateCompensationDetail);
//get all compensation details
router.get('/findAll', compensationDetailController.getAllCompensationDetails);
//get compensation details of entered employee id
router.get('/findOne/:emp_id', compensationDetailController.getCompensationDetail);
module.exports = router;