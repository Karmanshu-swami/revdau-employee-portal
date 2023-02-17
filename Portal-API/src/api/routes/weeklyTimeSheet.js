//created by Rohini on 22nd november

// global imports
const express = require('express');

// local imports
const { weeklyTimeSheetController } = require('../controllers');
const router = express.Router();


router.post('/addTimeSheet', weeklyTimeSheetController.addTimeSheet);
//update time sheet
router.put('/edit/:emp_id', weeklyTimeSheetController.updateTimeSheet);
//get all time sheet details
router.get('/findAll', weeklyTimeSheetController.getAllTimeSheet);
//get all job history details
router.get('/findAll/:emp_id', weeklyTimeSheetController.getTimeSheet);


module.exports = router;