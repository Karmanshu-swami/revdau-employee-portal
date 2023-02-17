// global imports
const express = require('express');

// local imports
const { LeaveController } = require('../controllers');

const router = express.Router();

//route to apply for leave
router.post('/applyLeave', LeaveController.applyForLeave);
//approve/Reject leave
router.put('/approveReject/:leave_id/:emp_id', LeaveController.approvedRejectLeave);
//route to get all leaves of entered employee id
router.get('/findAll/:emp_id', LeaveController.getAllLeave);
//get all leaves details
router.get('/findAllLeaves', LeaveController.getAllLeaves);
//update leave details
router.put('/update/:leave_id', LeaveController.updateLeave);
//update leave type
router.put('/update/:leave_id/:emp_id', LeaveController.updateLeaveType);
//get all leave details under team
router.get('/findAllLeave/:emp_id', LeaveController.getAllLeavesUnderTeam);

module.exports = router;