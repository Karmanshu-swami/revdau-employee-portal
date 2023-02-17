// global imports
const express = require('express');

// local imports
const { empMasterController } = require('../controllers');

const router = express.Router();

const upload = require("../middlewares/upload");
//upload excel file
router.post("/upload", upload.single("file"), empMasterController.upload);


// create a new employee
router.post('/add', empMasterController.addEmployee);
//update i.e. to add the remaining fields of employee 
router.put('/add/:emp_id', empMasterController.addEmployeeEduDetails);
//login employee
router.post('/login', empMasterController.login);
// update employee by id
router.put('/update/:emp_id', empMasterController.updateEmployee);
// get all employees details
router.get('/findAll', empMasterController.getAllEmployees);
// get all employees whose status is active
router.get('/findAllActive', empMasterController.getActiveEmployee);
// Route to make status active to deactive
router.patch('/activeToDeactive/:emp_id', empMasterController.update);
//change password
router.put('/changePassword/:emp_id', empMasterController.changePassword);
//Route to get entered employee id details
router.get('/findOneEmployeeDetails/:emp_id', empMasterController.getEmployeeDetails);
//get Id n name of PM/RM/Admin
router.get('/find', empMasterController.getIdAndNameOfRMPMAdmin);
//get Id n name of Employee
router.get('/findIdName', empMasterController.getIdAndNameOfEmployee);
//route to send mail
router.post('/send-email',empMasterController.sendEmailNotification);
module.exports = router;