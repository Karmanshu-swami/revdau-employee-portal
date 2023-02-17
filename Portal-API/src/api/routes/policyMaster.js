// global imports
const express = require('express');

// local imports
const { policyMasterController } = require('../controllers');
const router = express.Router();


router.post('/addPolicy', policyMasterController.addPolicy);
router.get('/findAllActivePolicy', policyMasterController.getAllActivePolicies);


module.exports = router;