// global imports
const express = require('express');


// local imports
const { holidayCalenderController } = require('../controllers');

const router = express.Router();

const upload = require("../middlewares/upload");
//upload excel file
router.post("/upload", upload.single("file"), holidayCalenderController.uploadHolidayCalenderExcelsheet);



router.post('/create', holidayCalenderController.createHolidayCalender);
//update holiday calender
router.put('/update/:srNo', holidayCalenderController.updateHolidayCalender);
module.exports = router;