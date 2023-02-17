const utils = require('../../utils/response');
const { getDbManager } = require('../models');

const readXlsxFile = require("read-excel-file/node");

//upload holiday calender excel sheet
exports.uploadHolidayCalenderExcelsheet = async (req, res) => {
    console.log('upload holiday calender Excelsheet() triggered ....');
    const { Holiday_calender } = await getDbManager();
    try {
      if (req.file == undefined) {
        return res.status(400).send("Please upload an excel file!");
      }
      let path =
      __basedir + "/uploads/" + req.file.filename;

      readXlsxFile(path).then((rows) => {
        // skip header
        rows.shift();
  
        let holiday_calender = [];
        rows.forEach((row) => {
            let holidayCalender = {
              srNo: row[0],
              date: row[1],
              holiday_name : row[2],
            
          };
  
          holiday_calender.push(holidayCalender);
        });
        
        Holiday_calender.bulkCreate(holiday_calender)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};  


//create/add holiday calender details
exports.createHolidayCalender = async (req, res) => {
    console.log('createHolidayCalender() triggered ....');
  
    const { Holiday_calender } = await getDbManager();
   
      const data = req.body;
      const createHolidayCalender = await Holiday_calender.create(data);
    
      if(createHolidayCalender){
        res.send(utils.createSuccess(createHolidayCalender))
      }
      else{
        res.send(utils.createError('can not add/create holiday calender '))
      }     
    }

//Update holiday calender
exports.updateHolidayCalender = async (req, res) => {
    console.log('updateHolidayCalender() triggered ....');
    const { Holiday_calender } = await getDbManager();
      const updateHolidayCalender = await Holiday_calender.update(req.body, {
              where: {
                  srNo: req.params.srNo
               }
            });
      if(updateHolidayCalender){
        res.send(utils.createSuccess(updateHolidayCalender))
      }
      else{
        res.send(utils.createError('Can not update holiday calender'))
      }     
       
    }    