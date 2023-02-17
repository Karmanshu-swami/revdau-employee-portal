//Created by Rohini on 23rd november

// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');


exports.addCertificate = async (req, res) => {
    console.log('add certification details() triggered ....');
  
    const { Certification } = await getDbManager();
   
      const data = req.body;
      const newCertification = await Certification.create(data);
    
      if(newCertification){
        res.send(utils.createSuccess(newCertification))
      }
      else{
        res.send(utils.createError('Can not add the certificates'))
      }     
       
}

//Update certificate
exports.updateCertificate = async (req, res) => {
    console.log('update certificate details() triggered ....');
    const { Certification } = await getDbManager();
      const updateCertificateDetails = await Certification.update(req.body, {
              where: {
                  c_id: req.params.c_id
               }
            });
      if(updateCertificateDetails){
        res.send(utils.createSuccess(updateCertificateDetails))
      }
      else{
        res.send(utils.createError('Can not update certificates'))
      }     
}

//get all certificates
exports.getAllCertificates = async (req, res) => {
    console.log('getAllCertificates() triggered ....');
    const { Certification } = await getDbManager();
  
      const findAllCertificates = await Certification.findAll();
      if(findAllCertificates){
        res.send(utils.createSuccess(findAllCertificates))
      }
      else{
        res.send(utils.createError('can not found certificates'))
      }     
       
    }   
  
  //get certificates  of entered employee id
  exports.getCertificate = async (req, res) => {
    console.log('getCertificateOfEnteredEmployeeId() triggered ....');
    
    const { Certification } = await getDbManager();
    const findCertificateOfEnteredEmployeeId = await  Certification.findAll({
      where: {
        emp_id: req.params.emp_id
      }
    });
      if(findCertificateOfEnteredEmployeeId){
        res.send(utils.createSuccess(findCertificateOfEnteredEmployeeId))
      }
      else{
        res.send(utils.createError('can not found certificates of entered employee id'))
      }     
    }  