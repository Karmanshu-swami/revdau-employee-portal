//Created by Rohini on 24th november

// global imports
const express = require('express');

// local imports
const { taskTrackerController } = require('../controllers');
const router = express.Router();

//add task
router.post('/addTask', taskTrackerController.addTask);
router.put('/updateTask/:task_id', taskTrackerController.updateTask);
//get all tasks of entered employee id
router.get('/getTasks/:emp_id', taskTrackerController.getTask);
//get all task detail of entered task id
router.get('/getTaskDetail/:task_id', taskTrackerController.getTaskDetail);
//find all tasks
router.get('/findAllTasks', taskTrackerController.getAllTasks);
//get all task of entered date range
router.get('/getAllTaskOfDateRange', taskTrackerController.getAllTaskOfDateRange);
//get all task of entered employee id with date range
router.get('/getAllTaskOfEnteredEmpIdWithDateRange/:emp_id',taskTrackerController.getAllTaskOfEnteredEmpIdWithDateRange);
//get count of all tasks under PM
router.get('/findAll', taskTrackerController.countAllTask);
//get count of all tasks under RM
router.get('/findAllTaskUnderRM/:emp_id', taskTrackerController.getCountOfAllTaskUnderRM);
//get count of all tasks with date range under PM
router.get('/findAllTasksWithDateRangeUnderPM', taskTrackerController.countAllTasksWithDateRange);
//get count of all tasks with date range under RM
router.get('/findAllTasksWithDateRangeUnderRM/:emp_id', taskTrackerController.getCountOfAllTaskWithDateRangeUnderRM);
//send email notification
//router.post('/sendEmail',taskTrackerController.sendEmail);
module.exports = router;