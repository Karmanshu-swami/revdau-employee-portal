//Created by Rohini on 21st november

// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');


exports.addJobHistory = async (req, res) => {
    console.log('add job history details() triggered ....');
  
    const { Job_history } = await getDbManager();
   
      const data = req.body;
      const newJobHistory = await Job_history.create(data);
    
      if(newJobHistory){
        res.send(utils.createSuccess(newJobHistory))
      }
      else{
        res.send(utils.createError('Can not add the job history details'))
      }     
       
}

//Update job history details
exports.updateJobHistory = async (req, res) => {
    console.log('update job history details() triggered ....');
    const { Job_history } = await getDbManager();
      const updateJobHistoryDetails = await Job_history .update(req.body, {
              where: {
                  jh_id: req.params.jh_id
               }
            });
      if(updateJobHistoryDetails){
        res.send(utils.createSuccess(updateJobHistoryDetails))
      }
      else{
        res.send(utils.createError('Can not update job history details'))
      }     
    }

//get all job history details
exports.getAllJobHistoryDetail = async (req, res) => {
  console.log('getAllJobHistoryDetails() triggered ....');
  const { Job_history } = await getDbManager();

    const findAllJobHistoryDetails = await Job_history.findAll();
    if(findAllJobHistoryDetails){
      res.send(utils.createSuccess(findAllJobHistoryDetails))
    }
    else{
      res.send(utils.createError('can not found job history details'))
    }     
     
  }       

//get job history of entered employee id
exports.getJobHistoryDetail = async (req, res) => {
  console.log('getJobHistoryDetailsOfEnteredEmployeeId() triggered ....');
  
  const { Job_history } = await getDbManager();
  const findJobHistoryDetailsOfEnteredEmployeeId = await  Job_history.findAll({
    where: {
      emp_id: req.params.emp_id
    }
  });
    if(findJobHistoryDetailsOfEnteredEmployeeId){
      res.send(utils.createSuccess(findJobHistoryDetailsOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found job history details of entered employee id'))
    }     
  }    