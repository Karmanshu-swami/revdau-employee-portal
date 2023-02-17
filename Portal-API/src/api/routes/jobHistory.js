//Created by Rohini on 21st november

// global imports
const express = require('express');

// local imports
const { jobHistoryController } = require('../controllers');
const router = express.Router();

//add job history details
router.post('/add', jobHistoryController.addJobHistory);
//update job history
router.put('/edit/:jh_id', jobHistoryController.updateJobHistory);
//get all job history details
router.get('/findAll', jobHistoryController.getAllJobHistoryDetail);
//get job history details of entered employee id
router.get('/findOne/:emp_id', jobHistoryController.getJobHistoryDetail);

module.exports = router;