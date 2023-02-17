//Created by Rohini on 23rd november

// global imports
const express = require('express');

// local imports
const { certificationController } = require('../controllers');

const router = express.Router();

// add certificate
router.post('/add', certificationController.addCertificate);
//update certificate
router.put('/edit/:c_id', certificationController.updateCertificate);
//get all certificates
router.get('/findAll', certificationController.getAllCertificates);
//get certificates of entered employee id
router.get('/findOne/:emp_id', certificationController.getCertificate);

module.exports = router;