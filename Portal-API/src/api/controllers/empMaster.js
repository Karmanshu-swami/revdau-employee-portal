const utils = require('../../utils/response');
const { getDbManager } = require('../models');
const jwt = require('jsonwebtoken');
const key = 'rLjd1Wik3yFV6QPTFLQv3KmjvLqTcqOu';
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const readXlsxFile = require("read-excel-file/node");

const nodemailer = require('nodemailer');

//upload an excel sheet
exports.upload = async (req, res) => {
  console.log('upload Excel() triggered ....');
  const { Employee_master } = await getDbManager();
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/uploads/" + req.file.filename;

      readXlsxFile(path).then((rows) => {
        // skip header
        rows.shift();
  
        let employee_master = [];
  
        rows.forEach((row) => {
          let employeeMaster = {
            emp_id: row[0],
            title: row[1],
            first_name: row[2],
            middle_name: row[3],
            last_name: row[4],
            email: row[6],
            password: row[7],
            role: row[8],
            fathers_or_husband_name: row[9],
            relation: row[10],
            date_of_joining: row[11],
            job_profile: row[12],
            date_of_birth: row[13],
            marital_status: row[14],
            gender: row[15],
            nationality: row[16],
            primary_contact_no: row[17],
            emergency_contact_person: row[18],
            emergency_contact_relation: row[19],
            emergency_contact_address: row[20],
            emergency_contact_no: row[21],
            current_address: row[22],
            permanent_address: row[23],
            alternative_contact_no: row[24],
            personal_email_id: row[25],
            nominee_name: row[26],
            nominee_relationship: row[27],
            PAN: row[28],
            addhar_no: row[29],
            existing_UAN_and_EPF_no: row[30],
            bank_account_holder_name: row[31],
            bank_account_no: row[32],
            bank_account_type: row[33],
            IFSC_code: row[34],
            bank_name_and_branch_address: row[35],
            blood_group: row[36],
            height_in_centimeter: row[37],
            weight_in_kilogram: row[38],
            tenth_per: row[39],
            tenth_passing_year: row[40],
            twelveth_per: row[41],
            twelveth_passing_year: row[42],
            diploma_per: row[43],
            diploma_passing_year: row[44],
            graduation_qualification: row[45],
            branch: row[46],
            college: row[47],
            university: row[48],
            admission_year: row[49],
            year_of_passing: row[50],
            degree_per: row[51],
            aggregate: row[52],
            grade : row[53],
            pg_qualification: row[54],
            pg_branch: row[55],
            pg_year: row[56],
            pg_per: row[57],
            pg_aggregate: row[58],
            pg_college: row[59],
            pg_university: row[60],
            CTC : row[61],
            reporting_to: row[62],
            status : row[63],
            
          };
  
          employee_master.push(employeeMaster);
        });
        
        Employee_master.bulkCreate(employee_master)
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





//add employee details
exports.addEmployee = async (req, res) => {
  console.log('addemployee() triggered ....');
  const { Employee_master } = await getDbManager();
    
    const data = req.body;
    const newEmployee = await Employee_master.create(data);
    if(newEmployee){
      res.send(utils.createSuccess(newEmployee))
    }
    else{
      res.send(utils.createError('Can not add user'))
    }     
  }

  

  //add/update education details
  exports.addEmployeeEduDetails = async (req, res) => {
    console.log('addEmployeeEduDetails() triggered ....');
    const { Employee_master } = await getDbManager();
       const updateEmployee = await Employee_master.update(req.body, 
      {
              where: {
                  emp_id: req.params.emp_id
               }
            }
      );
      if(updateEmployee){
        res.send(utils.createSuccess(updateEmployee))
      }
      else{
        res.send(utils.createError('Can not update user'))
      }     
    }


  //update employee whole data
 exports.updateEmployee = async (req, res) => {
  console.log('update employee details() triggered ....');
  const { Employee_master } = await getDbManager();
    const updateEmployee = await Employee_master.update(req.body, {
            where: {
                emp_id: req.params.emp_id
             }
          });
    if(updateEmployee){
      res.send(utils.createSuccess(updateEmployee))
    }
    else{
      res.send(utils.createError('Can not update user'))
    }     
  }

//get all employee details
exports.getAllEmployees = async (req, res) => {
  console.log('getAllEmployeeProfile() triggered ....');
  const { Employee_master } = await getDbManager();

    const findAllEmployee = await Employee_master.sequelize.query(`select concat(e.first_name," ", e.last_name) as name, e.*, concat(t.first_name," " ,t.last_name) as reporting_to from employee_master e, employee_master t 
    where e.reporting_to=t.emp_id`, { type: QueryTypes.SELECT});
    if(findAllEmployee){
      res.send(utils.createSuccess(findAllEmployee))
    }
    else{
      res.send(utils.createError('can not found'))
    }     
     
  }


//find all employees whose status is active
exports.getActiveEmployee = async (req, res) => {
  console.log('getAllActiveEmployeeProfile() triggered ....');
  const { Employee_master } = await getDbManager();
    
    const findEmployee = await Employee_master.findAll({
            where: {
              status: req.body.status
            }
          });
    if(findEmployee){
      res.send(utils.createSuccess(findEmployee))
    }
    else{
      res.send(utils.createError('Can not found user whose status is active'))
    }     
  }

//login employee
exports.login = async (req, res) => {
  console.log('login() triggered ....');
  
  const { Employee_master } = await getDbManager();
    const { email, password } = req.body;
    const data = await Employee_master.findOne({attributes: ['emp_id', 'first_name', 'last_name', 'role'],
      where: {email, password},
      })
      if(data){
      jwt.sign({data},key,{expiresIn:'300s'},(err,token)=>{
        fdata = {data, token}
       res.send(utils.createSuccess(fdata))
      })
    }
    else{
      res.send(utils.createError('User not Found'))
    }     
  }


//make status active to deactive
 exports.update = async (req, res) => {
  console.log('activeToDeactive() triggered ....');
  const { Employee_master } = await getDbManager();
    
    const updateEmployee = await Employee_master.update({status:"deactive"}, {
            where: {
                emp_id: req.params.emp_id
             }
          });
    if(updateEmployee){
      res.send(utils.createSuccess(updateEmployee))
    }
    else{
      res.send(utils.createError('User not Found'))
    }     
  }


//change password
exports.changePassword = async (req, res) => {
  console.log('changePassword() triggered ....');
  const { Employee_master } = await getDbManager();
  const password = req.body
    const updatePassword = await Employee_master.update(password,{
            where: {
              emp_id: req.params.emp_id,
        
             }
          });
    if(updatePassword){
      res.send(utils.createSuccess(updatePassword))
    }
    else{
      res.send(utils.createError('Can not change the password'))
    }     
  }

//get entered employee id details
exports.getEmployeeDetails = async (req, res) => {
  console.log('getEnteredEmployeeIdDetails() triggered ....');
  
  const { Employee_master } = await getDbManager();
  const findEnteredEmployeeIdDetails = await  Employee_master.sequelize.query(`select e.*, concat(t.first_name," " ,t.last_name) as reporting_to from employee_master e, employee_master t 
  where e.reporting_to=t.emp_id and e.emp_id=`+req.params.emp_id, { type: QueryTypes.SELECT});
 
  if(findEnteredEmployeeIdDetails){
      res.send(utils.createSuccess(findEnteredEmployeeIdDetails))
    }
    else{
      res.send(utils.createError('can not found entered employee id  details'))
    }     
  }

 //api for getting empid/emp name whose role is RM,PM, Admin 
 exports.getIdAndNameOfRMPMAdmin = async (req, res) => {
  console.log('getIdAndNameOfRM/PM/Admin() triggered ....');

   const { Employee_master } = await getDbManager();
   const findAllIdsAndNameOfRMPMAdmin = await Employee_master.sequelize.query(`select emp_id,concat(first_name," ",last_name) AS Name from  employee_master where role IN ('Manager','Project manager','Admin')`,{ type: QueryTypes.SELECT})
     if(findAllIdsAndNameOfRMPMAdmin){
        res.send(utils.createSuccess(findAllIdsAndNameOfRMPMAdmin))
    }

    else{
      res.send(utils.createError('can not found Id and name of RM/PM/admin'))
    }    
} 

//api for getting empid/empname whose role is employee
exports.getIdAndNameOfEmployee = async (req, res) => {
  console.log('getIdAndNameOfEmployee() triggered ....');

   const { Employee_master } = await getDbManager();
   const findAllIdsAndNameOfEmployee = await Employee_master.sequelize.query(`select emp_id,concat(first_name," ",last_name) AS Name from  employee_master where role='Employee'`,{ type: QueryTypes.SELECT})
     if(findAllIdsAndNameOfEmployee){
        res.send(utils.createSuccess(findAllIdsAndNameOfEmployee))
    }

    else{
      res.send(utils.createError('can not found Id and name of employee'))
    }    
} 
 

//send email 
exports.sendEmailNotification = async (req, res) => {
  console.log('email notification() triggered ....');
  const { Employee_master } = await getDbManager();
// creating a transport used to send emails
const transporter = nodemailer.createTransport({
  //  host: 'smtp.gmail.com',
  //  port: 465,
  //  secure: true,
  
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    // tls: {
    //    ciphers:'SSLv3'
    // },
  // auth: {
  //   user: 'rohinisuryawanshi543@gmail.com',
  //   pass: 'rohiniS@123'
  // }
  auth: {
    user: 'suryawanshirohini@outlook.com',
    pass: 'Micro@1234'
  }
});

const email = await Employee_master.sequelize.query(`SELECT e.email from employee_master e where e.emp_id in(3,7)`,{ type: QueryTypes.SELECT});
console.log(email[0])
console.log(email[1])
// console.log(email)
console.log("if")
    // if(email){
    //  res.send(utils.createSuccess(email))
    //  console.log(email[0]);
    //  console.log(email[1]);
     const mailOptions = {
              from: 'suryawanshirohini@outlook.com',
              to: email[1].email,        
              subject: "New Task Assigned",
              text: "Hi Rohini, Pallavi has assigned you this task 'Task Name'"
           }
           // console.log(from);
   transporter.sendMail(mailOptions, function(error, info){
    console.log('email sent successfully')
   if (error) {
     console.log(error);
   } 
   else {
     console.log('Email sent: ' + info.response);
   }
 })}

//}
