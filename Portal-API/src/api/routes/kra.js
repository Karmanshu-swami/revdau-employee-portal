// global imports
const express = require('express');

// local imports
const { KraController } = require('../controllers');

const router = express.Router();

// add kra
router.post('/add', KraController.addKra);
//update kra
router.put('/update/:kra_id', KraController.updateKra);
//update manager comment
router.put('/update/:kra_id/:emp_id', KraController.updateComment);



//get all KRA details
router.get('/findAllKra', KraController.getAllKRA);
//get Kra details of entered employee id
router.get('/findKra/:emp_id', KraController.getAllKra);
//get milestone of entered employee id
router.get('/findKra/:kra_id/:emp_id', KraController.getMilestone);

//get all KRA under team
router.get('/findAll/:emp_id', KraController.getAllKRAUnderTeam);
//get the no. of KRAs in current financial year for logged in employee id
router.get('/findNoOfKra/:emp_id', KraController.getNoOfKraInCurrentFinYear);
module.exports = router;