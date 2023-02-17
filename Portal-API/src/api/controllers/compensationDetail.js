//Created by Rohini on 21st november

// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');


exports.addCompensationDetail = async (req, res) => {
    console.log('add compensation details() triggered ....');
  
    const { Compensation_detail } = await getDbManager();
   
      const data = req.body;
      const newCompensationDetail = await Compensation_detail.create(data);
    
      if(newCompensationDetail){
        res.send(utils.createSuccess(newCompensationDetail))
      }
      else{
        res.send(utils.createError('Can not add the compensation details'))
      }     
       
}

//Update compensation details
exports.updateCompensationDetail = async (req, res) => {
    console.log('update job history details() triggered ....');
    const { Compensation_detail } = await getDbManager();
      const updateCompensationDetails = await Compensation_detail.update(req.body, {
              where: {
                  cd_id: req.params.cd_id
               }
            });
      if(updateCompensationDetails){
        res.send(utils.createSuccess(updateCompensationDetails))
      }
      else{
        res.send(utils.createError('Can not update compensation details'))
      }     
    }

//get all compensation details
exports.getAllCompensationDetails = async (req, res) => {
  console.log('getAllCompensationDetails() triggered ....');
  const { Compensation_detail } = await getDbManager();

    const findAllCompensationDetails = await Compensation_detail.findAll();
    if(findAllCompensationDetails){
      res.send(utils.createSuccess(findAllCompensationDetails))
    }
    else{
      res.send(utils.createError('can not found compensation details'))
    }     
     
  }   

//get compensation details  of entered employee id
exports.getCompensationDetail = async (req, res) => {
  console.log('getCompensationDetailsOfEnteredEmployeeId() triggered ....');
  
  const { Compensation_detail } = await getDbManager();
  const findCompensationDetailsOfEnteredEmployeeId = await  Compensation_detail.findAll({
    where: {
      emp_id: req.params.emp_id
    }
  });
    if(findCompensationDetailsOfEnteredEmployeeId){
      res.send(utils.createSuccess(findCompensationDetailsOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found compensation details of entered employee id'))
    }     
  }  