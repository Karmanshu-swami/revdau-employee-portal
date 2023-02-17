//Created by Rohini on 14th october

// global imports
const express = require('express');

// local imports
const { finalReviewController } = require('../controllers');

const router = express.Router();

// add kra
router.post('/add', finalReviewController.addFinalReview);
//find final review details of entered employee id
router.get('/findFinalReviewDetails/:emp_id', finalReviewController.getFinalReviewDetails);
//update acknowledgement
router.put('/updateAck/:emp_id', finalReviewController.updateAck);
module.exports = router;