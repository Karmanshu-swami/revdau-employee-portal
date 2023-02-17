const utils = require('../../utils/response');
const { getDbManager } = require('../models');
const Sequelize = require('sequelize');

const { QueryTypes } = require('sequelize');




//  add kra
  exports.addKra = async (req, res) => {
    console.log('addkra() triggered ....');
    const { Kra } = await getDbManager();
      
      const data = req.body;
      const newKra = await Kra.create(data);
      if(newKra){
        res.send(utils.createSuccess(newKra))
      }
      else{
        res.send(utils.createError('Can not add kra'))
      }     
    }

//Update KRA
    exports.updateKra = async (req, res) => {
      console.log('update KRA() triggered ....');
      const { Kra } = await getDbManager();
        const updateKra = await Kra.update(req.body, {
                where: {
                    kra_id: req.params.kra_id
                 }
              });
        if(updateKra){
          res.send(utils.createSuccess(updateKra))
        }
        else{
          res.send(utils.createError('Can not update kra'))
        }     
         
      }
    


//update manager_comment 
exports.updateComment = async (req, res) => {
  console.log('updateManagerComment() triggered ....');
  const { Kra } = await getDbManager();
  
    const manager_comment = req.body
    const updateKra = await Kra.update(manager_comment,{
            where: {
                kra_id: req.params.kra_id,
                emp_id: req.params.emp_id
             }
          });
    if(updateKra){
      res.send(utils.createSuccess(updateKra))
    }
    else{
      res.send(utils.createError('Can not update comment in kra '))
    }     
  }

 //get all KRA details
exports.getAllKRA = async (req, res) => {
  console.log('getAllKRADetails() triggered ....');
  const { Kra } = await getDbManager();
  const findAllKra = await Kra.findAll();
    if(findAllKra){
      res.send(utils.createSuccess(findAllKra))
    }
    else{
      res.send(utils.createError('can not found kra details'))
    }     
  }

//find KRA details  of entered employee id
    exports.getAllKra = async (req, res) => {
      console.log('getAllKraDetailsOfEnteredEmployeeId() triggered ....');
      
      const { Kra } = await getDbManager();
      const findAllKraDetailsOfEnteredEmployeeId = await  Kra.findAll({
        where: {
          //kra_id: req.params.kra_id,
          emp_id: req.params.emp_id
        }
      });
        if(findAllKraDetailsOfEnteredEmployeeId){
          res.send(utils.createSuccess(findAllKraDetailsOfEnteredEmployeeId))
        }
        else{
          res.send(utils.createError('can not found kra details'))
        }     
      }

//find milestone  of entered employee id
exports.getMilestone = async (req, res) => {
  console.log('getMilestoneOfEnteredEmployeeId() triggered ....');
  
  const { Kra } = await getDbManager();
  const findMilestoneOfEnteredEmployeeId = await  Kra.findOne({
    where: {
      kra_id: req.params.kra_id,
      emp_id: req.params.emp_id
    }
  });
    if(findMilestoneOfEnteredEmployeeId){
      res.send(utils.createSuccess(findMilestoneOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found milestone of entered employee id'))
    }     
  }

  //api to get the no. of KRA's in current financial year for logged in employee id
  exports.getNoOfKraInCurrentFinYear = async (req, res) => {
    console.log('No. Of KRAs In Current Financial Year() triggered ....');
    const { Kra } = await getDbManager();
    const Op = Sequelize.Op;  
    const year = new Date().getFullYear();
    //console.log(year)
    const countKra = await Kra.count({
      where: { 
          emp_id: req.params.emp_id,
          FY:{[Op.like]: year+'%'}, 
        },
    });
    if(countKra){
        res.send(utils.createSuccess(countKra))
    }
    else{
        res.send(utils.createError('Can not count the no. of KRAs in current financial year'))
    }     
  }

  //get all kra under team
  exports.getAllKRAUnderTeam = async (req, res) => {
  console.log('getAllKRADetailsUnderHis/HerTeam() triggered ....');

   const emp_id = req.params.emp_id
   const { Kra } = await getDbManager();
   const findAllKra = await Kra.sequelize.query("select e.first_name, e.last_name,k.kra_id,k.emp_id, k.FY, k.quarter, k.KRA_description,k.metric,k.weightage,k.KRA_measure_of_success,k.milestone1,k.milestone2,k.milestone3,k.achievement, k.status,k.manager_comment from kra k, employee_master e where e.emp_id=k.emp_id and e.reporting_to=" +emp_id,{ type: QueryTypes.SELECT})
     if(findAllKra){
        res.send(utils.createSuccess(findAllKra))
    }

    else{
      res.send(utils.createError('can not found kra details under team'))
    }    
}
  

  