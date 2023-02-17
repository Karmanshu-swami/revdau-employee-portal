const nodemailer = require('nodemailer');
// creating a transport used to send emails
// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'suryawanshirohini@outlook.com',
    pass: 'Micro@1234'
  }
});


exports.sendMailNotification = async(req,res)=>{
const mailOptions = {
  from: 'select email from employee_master where emp_id=24',//email(session storage emp id)
  to: 'select email from employee_master where emp_id=22', //RM
  //cc: 'shmishra933@gmail.com',         //emp email and PM
  subject: 'Sending Email using Node.js',
  text: "Wow! That's simple"
  

};
console.log(from)
console.log(to)

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


