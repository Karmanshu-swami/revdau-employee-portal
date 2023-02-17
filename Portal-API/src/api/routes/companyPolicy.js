// global imports
const express = require('express');

// local imports
const { companyPolicyController } = require('../controllers');

const router = express.Router();

router.post('/add', companyPolicyController.addCompanyPolicy);
router.put('/update/:id/:emp_id', companyPolicyController.updatePolicy);
//find company policy details of entered employee id
router.get('/policyDetails/:emp_id', companyPolicyController.getCompanyPolicyDetails);
module.exports = router;