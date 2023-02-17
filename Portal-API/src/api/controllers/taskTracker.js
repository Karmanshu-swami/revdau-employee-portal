//Created by Rohini on 24th november

// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

const nodemailer = require('nodemailer');

exports.addTask = async (req, res) => {
    console.log('add task() triggered ....');
  
    const { Task_tracker } = await getDbManager();
   
      const data = req.body;
      const newTask = await Task_tracker.create(data);
    
      if(newTask){
        res.send(utils.createSuccess(newTask))
      }
      else{
        res.send(utils.createError('Can not add the task'))
      }     
}

//Update Task by Employee
exports.updateTask = async (req, res) => {
  console.log('update Task by employee triggered ....');

  const { Task_tracker } = await getDbManager();
  const {task_status, remark, priority, description, submission_date} = req.body

  const updateTask = await Task_tracker.update({
                    task_status:task_status,
                    remark:remark,
                    priority: priority,
                    description:description,
                    submission_date:submission_date,
                  },
                   {
                    where: {
                        task_id: req.params.task_id,                      
                    }
        });
    if(updateTask){
      res.send(utils.createSuccess(updateTask))
    }
    else{
      res.send(utils.createError('Can not update Task'))
    }     
}

//get task details of entered task id
exports.getTaskDetail = async (req, res) => {
  console.log('get task details of entered task id triggered ....');
  
  const { Task_tracker  } = await getDbManager();

  const findAllTasksOfEnteredEmployeeId = await  Task_tracker.sequelize.query(`select t.task_id as task_id, t.project_name as project_name,t.task_name as task_name,
  t.description as description, t.priority as priority, concat(e.first_name," " ,e.last_name) as assigned_by , t.task_status,t.start_date,t.end_date,t.remark from task_tracker t, employee_master e where e.emp_id = t.assigned_by and t.task_id=`+req.params.task_id, { type: QueryTypes.SELECT});
   
    if(findAllTasksOfEnteredEmployeeId ){
      res.send(utils.createSuccess(findAllTasksOfEnteredEmployeeId ))
    }
    else{
      res.send(utils.createError('can not found task'))
    }     
  }


//get all tasks of entered employee id
exports.getTask = async (req, res) => {
  console.log('get All Tasks of entered employee id() triggered ....');
  
  const { Task_tracker  } = await getDbManager();
  const findAllTasksOfEnteredEmployeeId = await  Task_tracker.sequelize.query(`select t.task_id as task_id, t.project_name as project_name,t.task_name as task_name,
  t.description as description, t.priority as priority, concat(e.first_name," " ,e.last_name) as assigned_by , t.task_status,t.start_date,t.end_date,t.submission_date from task_tracker t, employee_master e where e.emp_id = t.assigned_by and t.emp_id=`+req.params.emp_id, { type: QueryTypes.SELECT});
 
    if(findAllTasksOfEnteredEmployeeId ){
      res.send(utils.createSuccess(findAllTasksOfEnteredEmployeeId ))
    }
    else{
      res.send(utils.createError('can not found task'))
    }     
  }

//api to get all tasks
exports.getAllTasks = async (req, res) => {
  console.log('getAllTasksDetails() triggered ....');
  const { Task_tracker } = await getDbManager();

    const findAllTasks = await Task_tracker.findAll();
    if(findAllTasks){
      res.send(utils.createSuccess(findAllTasks))
    }
    else{
      res.send(utils.createError('can not found all tasks'))
    }     
 }     

  

  //api which can get either date/range of date/a month (combination of 3 months)
  //api to get the all tasks of date range
  exports.getAllTaskOfDateRange = async (req, res) => {
    console.log('get all task of user entered date range() triggered ....');
    const { Task_tracker } = await getDbManager();
    const Op = Sequelize.Op
    
    const date1 = req.body.date1
    const date2 = req.body.date2

    const findAllTaskOfDateRange = await Task_tracker.findAll({
    where:{
        start_date:
        {
           [Op.between]: [new Date(date1),new Date(date2)]
        },      
      }
   });
   if(findAllTaskOfDateRange){
         res.send(utils.createSuccess(findAllTaskOfDateRange))
   }
  else{
        res.send(utils.createError('Can not found the all task for date range'))
    }     
}

  
 //api to get the all tasks of date range with entered employee id
 exports.getAllTaskOfEnteredEmpIdWithDateRange = async (req, res) => {
  console.log('get all task of  date range with user entered employee id() triggered ....');
  const { Task_tracker } = await getDbManager();
  const Op = Sequelize.Op
  
  const date1 = req.body.date1
  const date2 = req.body.date2

  const findAllTaskOfDateRangeWithEnteredEmpId = await Task_tracker.findAll({
  where:{
    emp_id:req.params.emp_id,
      start_date:
      {
         [Op.between]: [new Date(date1),new Date(date2)]
      },      
    }
 });
 if(findAllTaskOfDateRangeWithEnteredEmpId){
       res.send(utils.createSuccess(findAllTaskOfDateRangeWithEnteredEmpId))
 }
else{
      res.send(utils.createError('Can not found the all task for date range with user entered employee id'))
  }     
}


//api to get count of all completed/pending/ongoing/total tasks under PM
exports.countAllTask = async (req, res) => {
  console.log('countAllTasksUnderPM() triggered ....');
  const { Task_tracker } = await getDbManager();

    const findAllCompletedTasks = await Task_tracker.sequelize.query(`SELECT e.emp_id, concat(r.first_name," ",r.last_name) as RM, concat(e.first_name," " ,e.last_name) as Emp_name, COUNT(IF(task_status='to do',1, NULL)) 'TO DO',
    COUNT(IF(task_status='in progress',1, NULL)) 'Inprogress',
    COUNT(IF(task_status='review',1, NULL)) 'Review',
    COUNT(IF(task_status='done',1, NULL)) 'Done',
    COUNT(*) as total_task
    FROM task_tracker t, employee_master e, employee_master r where t.emp_id=e.emp_id and r.emp_id=e.reporting_to group by t.emp_id`,{ type: QueryTypes.SELECT});
   
    if(findAllCompletedTasks){
      res.send(utils.createSuccess(findAllCompletedTasks))
    }
    else{
      res.send(utils.createError('can not found all tasks under PM'))
    }     
 }     

//api to get count of all completed/pending/ongoing/total tasks under RM
exports.getCountOfAllTaskUnderRM = async (req, res) => {
  console.log('countAllTasksUnderRM() triggered ....');
  const { Task_tracker } = await getDbManager();
  
    const findAllCompletedTasksUnderRM = await Task_tracker.sequelize.query(`SELECT e.emp_id,concat(e.first_name," " ,e.last_name) as Emp_name, COUNT(IF(task_status='to do',1, NULL)) 'TO DO',
    COUNT(IF(task_status='in progress',1, NULL)) 'Inprogress',
    COUNT(IF(task_status='review',1, NULL)) 'Review',
    COUNT(IF(task_status='done',1, NULL)) 'Done',
    COUNT(*) as total_task
    FROM task_tracker t, employee_master e where t.emp_id = e.emp_id AND e.reporting_to=`+req.params.emp_id+` group by t.emp_id`,{ type: QueryTypes.SELECT});
   
    if(findAllCompletedTasksUnderRM ){
      res.send(utils.createSuccess(findAllCompletedTasksUnderRM ))
    }
    else{
      res.send(utils.createError('can not found all  tasks under RM'))
    }     
 }   
 
//api to get count of all to do/inprogress/review/done tasks with date range under PM

exports.countAllTasksWithDateRange = async (req, res) => {
  console.log('countAllTasksWithinTheDateRange() triggered ....');
  const { Task_tracker } = await getDbManager();

  const Op = Sequelize.Op
    
  const date1 = req.body.date1
  const date2 = req.body.date2
  
  const findAllTasksWithDateRange = await Task_tracker.sequelize.query(`SELECT e.emp_id, concat(e.first_name," ", e.last_name) as Emp_name, COUNT(IF(task_status="to do",1, NULL)) "TO DO",COUNT(IF(task_status="in progress",1, NULL)) "Inprogress",COUNT(IF(task_status="review",1, NULL)) "Review",COUNT(IF(task_status="done",1, NULL)) "Done",COUNT(*) as total_task FROM task_tracker t, employee_master e WHERE t.start_date BETWEEN '`+date1+`' and '`+date2+`' AND t.emp_id=e.emp_id group by t.emp_id`,{ type: QueryTypes.SELECT});
    
    if(findAllTasksWithDateRange){
      res.send(utils.createSuccess(findAllTasksWithDateRange))
    }
    else{
      res.send(utils.createError('can not found all tasks within the date range'))
    }     
 }    
 
 //api to get count of all completed/pending/ongoing/total tasks With entered date range under RM
exports.getCountOfAllTaskWithDateRangeUnderRM = async (req, res) => {
  console.log('countAllTasksWithDateRangeUnderRM() triggered ....');
  const { Task_tracker } = await getDbManager();

  const date1 = req.body.date1
  const date2 = req.body.date2
  
  
    const findAllCompletedTasksWithDateRangeUnderRM = await Task_tracker.sequelize.query(`SELECT e.emp_id,concat(e.first_name," " ,e.last_name) as Emp_name, COUNT(IF(task_status='to do',1, NULL)) 'TO DO',
    COUNT(IF(task_status='in progress',1, NULL)) 'Inprogress',
    COUNT(IF(task_status='review',1, NULL)) 'Review',
    COUNT(IF(task_status='done',1, NULL)) 'Done',
    COUNT(*) as total_task
    FROM task_tracker t, employee_master e where t.start_date BETWEEN '`+date1+`' and '`+date2+`' AND t.emp_id = e.emp_id AND e.reporting_to=`+req.params.emp_id+` group by t.emp_id`,{ type: QueryTypes.SELECT});
   
    if(findAllCompletedTasksWithDateRangeUnderRM){
      res.send(utils.createSuccess(findAllCompletedTasksWithDateRangeUnderRM))
    }
    else{
      res.send(utils.createError('can not found all  tasks with date range under RM'))
    }     
 }   



