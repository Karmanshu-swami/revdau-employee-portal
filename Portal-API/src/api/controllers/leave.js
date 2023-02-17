// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');
const { QueryTypes } = require('sequelize');

//apply for leave
exports.applyForLeave = async (req, res) => {
  console.log('applyForLeave() triggered ....');
  const { Leavee } = await getDbManager();
 
    const data = req.body;
    //get all data with emp_id and dates provided in body
    //if data go to error otherwise add leave
    const applyLeave = await Leavee.create(data);
  
    if(applyLeave){
      res.send(utils.createSuccess(applyLeave))
    }
    else{
      res.send(utils.createError('can not apply '))
    }     
 }


//create API for approving/rejecting leave. 
//approve/reject leave
exports.approvedRejectLeave = async (req, res) => {
  console.log('approveRejectLeave() triggered ....');
  const { Leavee } = await getDbManager();
  
    const status = req.body
    const approveRejectLeave = await Leavee.update(status,{
            where: {
                leave_id: req.params.leave_id,
                emp_id: req.params.emp_id
             }
          });
    if(approveRejectLeave){
      res.send(utils.createSuccess(approveRejectLeave))
    }
    else{
      res.send(utils.createError('Can not approve/reject leave '))
    }     
  }

//create API for list of his/her leaves visible to an employee
//get all leaves of entered employee id
exports.getAllLeaves = async (req, res) => {
  console.log('getAllLeaveDetails() triggered ....');
  
  const { Leavee } = await getDbManager();
  const findAllLeavesOfEnteredEmployeeId = await Leavee.sequelize.query(`select concat(e.first_name," ", e.last_name) as name, l.* from employee_master e, leavee l 
  where e.emp_id=l.emp_id`, { type: QueryTypes.SELECT});
    if(findAllLeavesOfEnteredEmployeeId){
      res.send(utils.createSuccess(findAllLeavesOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found kra details'))
    }     
  }

//get all leaves details
exports.getAllLeave = async (req, res) => {
  console.log('getAllLeavesDetails() triggered ....');
  const { Leavee } = await getDbManager();
  const findAllLeave = await Leavee.findAll({where:{ emp_id: req.params.emp_id}});
    if(findAllLeave){
      res.send(utils.createSuccess(findAllLeave))
    }
    else{
      res.send(utils.createError('can not found leaves details'))
    }     
  }

  //Update leave deatils
  exports.updateLeave = async (req, res) => {
    console.log('update leave() triggered ....');
    const { Leavee } = await getDbManager();
      const updateLeavee = await Leavee .update(req.body, {
              where: {
                  leave_id: req.params.leave_id
               }
            });
      if(updateLeavee){
        res.send(utils.createSuccess(updateLeavee))
      }
      else{
        res.send(utils.createError('Can not update leave'))
      }     
    }

//update leave type
exports.updateLeaveType = async (req, res) => {
  console.log('updateLeaveType() triggered ....');
  const { Leavee } = await getDbManager();
  
    const leave_type = req.body
    const updateLeaveType = await Leavee.update(leave_type,{
            where: {
                leave_id: req.params.leave_id,
                emp_id: req.params.emp_id
             }
          });
    if(updateLeaveType){
      res.send(utils.createSuccess(updateLeaveType))
    }
    else{
      res.send(utils.createError('Can not update leave type in leave '))
    }     
  }



  //create API for list of all leaves of team visible to reporting manager

  exports.getAllLeavesUnderTeam = async (req, res) => {
    console.log('getAllLeaveDetailsUnderHis/HerTeam() triggered ....');
    const emp_id = req.params.emp_id
    const { Leavee } = await getDbManager();
    const findAllLeavee = await Leavee.sequelize.query("select e.first_name, e.last_name,l.leave_id,l.emp_id, l.leave_from,l.leave_to,l.reason,l.status,l.leave_type,l.no_of_leave from leavee l, employee_master e where e.emp_id=l.emp_id and e.reporting_to=" +emp_id,{ type: QueryTypes.SELECT})
     if(findAllLeavee){
        res.send(utils.createSuccess(findAllLeavee))
    }
      else{
        res.send(utils.createError('can not found leave details'))
      }     
    }
