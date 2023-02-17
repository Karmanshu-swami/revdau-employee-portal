//Created by Rohini on 18th november

// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');


exports.addPolicy = async (req, res) => {
    console.log('add policy() triggered ....');
  
    const { Policy_master } = await getDbManager();
   
      const data = req.body;
      const newPolicy = await Policy_master.create(data);
    
      if(newPolicy){
        res.send(utils.createSuccess(newPolicy))
      }
      else{
        res.send(utils.createError('Can not add the policy'))
      }     
       
    }

//get all policies whose status is active
exports.getAllActivePolicies = async (req, res) => {
    console.log('get all policies whose status is active() triggered ....');
    const { Policy_master } = await getDbManager();
    const findAllPolicy = await Policy_master.findAll({
        where: {
          status: req.body.status
        }
      });
      if(findAllPolicy){
        res.send(utils.createSuccess(findAllPolicy))
      }
      else{
        res.send(utils.createError('can not found policies whose status is active'))
      }     
    }