//Created by Rohini on 14th october

const utils = require('../../utils/response');
const { getDbManager } = require('../models');


//  add final review
exports.addFinalReview = async (req, res) => {
    console.log('addFinalReview() triggered ....');
    const { Final_review } = await getDbManager();
      
      const data = req.body;
      const newFinalReview = await Final_review.create(data);
      if(newFinalReview){
        res.send(utils.createSuccess(newFinalReview))
      }
      else{
        res.send(utils.createError('Can not add final review'))
      }     
    }

//find final review details of entered employee id
exports.getFinalReviewDetails = async (req, res) => {
  console.log('getFinalReviewDetailsEnteredEmployeeId() triggered ....');
  
  const { Final_review } = await getDbManager();
  const findFinalReviewDetailsOfEnteredEmployeeId = await  Final_review.findAll({
    where: {
      emp_id: req.params.emp_id
    }
  });
    if(findFinalReviewDetailsOfEnteredEmployeeId){
      res.send(utils.createSuccess(findFinalReviewDetailsOfEnteredEmployeeId))
    }
    else{
      res.send(utils.createError('can not found final review details of entered employee id'))
    }     
  }    


//update acknowledgement 
 exports.updateAck = async (req, res) => {
  console.log('updateAcknowledgement() triggered ....');
  const { Final_review } = await getDbManager();
  
  const acknowledgement = req.body
  const updateAcknowledgement = await Final_review.update(acknowledgement,{
          where: {
              emp_id: req.params.emp_id
           }
        });
    if(updateAcknowledgement){
      res.send(utils.createSuccess(updateAcknowledgement))
    }
    else{
      res.send(utils.createError('Can not update acknowledgement'))
    }     
  }