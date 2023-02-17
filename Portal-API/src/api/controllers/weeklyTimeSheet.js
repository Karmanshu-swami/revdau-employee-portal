//Created by Rohini on 22nd november

// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');


exports.addTimeSheet = async (req, res) => {
    console.log('add weekly time sheet() triggered ....');
  
    const { Weekly_time_sheet } = await getDbManager();
   
      const data = req.body;
      const newTimeSheet = await Weekly_time_sheet.create(data);
    
      if(newTimeSheet){
        res.send(utils.createSuccess(newTimeSheet))
      }
      else{
        res.send(utils.createError('Can not add weekly time sheet'))
      }     
       
}

//Update weekly time sheet
exports.updateTimeSheet = async (req, res) => {
  console.log('update weekly time sheet() triggered ....');
  const { Weekly_time_sheet } = await getDbManager();
    const updateWeeklyTimeSheet = await Weekly_time_sheet.update(req.body, {
            where: {
                emp_id: req.params.emp_id
             }
          });
    if(updateWeeklyTimeSheet){
      res.send(utils.createSuccess(updateWeeklyTimeSheet))
    }
    else{
      res.send(utils.createError('Can not update weekly time sheet details'))
    }     
  }

//get all time sheet
exports.getAllTimeSheet = async (req, res) => {
  console.log('getAlltimeSheetDetails() triggered ....');
  const { Weekly_time_sheet } = await getDbManager();

    const findAllTimeSheetDetails = await Weekly_time_sheet.findAll();
    if(findAllTimeSheetDetails){
      res.send(utils.createSuccess(findAllTimeSheetDetails))
    }
    else{
      res.send(utils.createError('can not found the all time sheet details'))
    }     
     
  }      

//get time sheet of entered employee id
exports.getTimeSheet = async (req, res) => {
  console.log('getTimeSheetOfEnteredEmployeeId() triggered ....');
  
  const { Weekly_time_sheet } = await getDbManager();
  const findTimeSheetDetailsOfEnteredEmployeeId = await Weekly_time_sheet.findAll({
    where: {
      emp_id: req.params.emp_id
    }
  });
    if(findTimeSheetDetailsOfEnteredEmployeeId){
      res.send(utils.createSuccess(findTimeSheetDetailsOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found job history details of entered employee id'))
    }     
  }    