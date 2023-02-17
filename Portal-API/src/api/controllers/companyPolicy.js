// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');

//add company policy details
exports.addCompanyPolicy = async (req, res) => {
    console.log('company policy() triggered ....');
  
    const { Company_policy } = await getDbManager();
   
      const data = req.body;
      const policy = await Company_policy.create(data);
    
      if(policy){
        res.send(utils.createSuccess(policy))
      }
      else{
        res.send(utils.createError('can not add company policy'))
      }     
    }

//update company policy details    
exports.updatePolicy = async (req, res) => {
    console.log('updatePolicy() triggered ....');
    const { Company_policy } = await getDbManager();
        const updatePolicy = await Company_policy.update(req.body, {
                  where: {
                      id: req.params.id,
                      emp_id: req.params.emp_id
                   }
                });
        if(updatePolicy){
            res.send(utils.createSuccess(updatePolicy))
        }
        else{
            res.send(utils.createError('Can not update company policy'))
        }     
    }    


//find company policy details of entered employee id
exports.getCompanyPolicyDetails = async (req, res) => {
  console.log('getCompanyPolicyDetailsEnteredEmployeeId() triggered ....');
  
  const { Company_policy } = await getDbManager();
  const findCompanyPolicyDetailsOfEnteredEmployeeId = await  Company_policy.findAll({
    where: {
      emp_id: req.params.emp_id
    }
  });
    if(findCompanyPolicyDetailsOfEnteredEmployeeId){
      res.send(utils.createSuccess(findCompanyPolicyDetailsOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found company policy details of entered employee id'))
    }     
  }    