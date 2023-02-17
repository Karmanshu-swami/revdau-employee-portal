// global imports
const express = require('express');
const addRequestId = require('express-request-id');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const Path = require('path')
//const logger = require('morgan');
const app = express();

global.__basedir = __dirname + "/..";

const multer = require('multer')
const path = require('path')

//storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename: (req, file, cb) => {
        const emp_id = req.params.emp_id
        const name = Path.parse(file.originalname).name
        //console.log(emp_id)
        return cb(null, `${name}_${emp_id}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

app.use('/profile', express.static('upload/images'));
// const upload = multer({
//     dest:'./upload/images',
// })

// app.post("/single",upload.single('profile'), (req, res)=>{
//     //to send response back to user
//     res.json({
//         success:1,
//         profile_url: `http://localhost:3001/profile/${req.file.filename}`
//     })
//     //console.log(req.file)
// })

app.post("/multiple/:emp_id", upload.array("photo",5),
(req,res)=>{
    console.log(req.files)
    
    res.send("multiple files upload success")
})

// const nodemailer = require('nodemailer');
// // creating a transport used to send emails
// const transporter = nodemailer.createTransport({
//   service: 'outlook',
//   auth: {
//     user: 'suryawanshirohini@outlook.com',
//     pass: 'Micro@1234'
//   }
// });

// const mailOptions = {
//   from: 'select email from employee_master where emp_id=24',//email(session storage emp id)
//   to: 'select email from employee_master where emp_id=22', //RM
//   //cc: 'shmishra933@gmail.com',         //emp email and PM
//   subject: 'Sending Email using Node.js',
//   text: "Wow! That's simple"
// };
// console.log(from)
// console.log(to)
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });






// pre-routes
app.use(cors());
app.use(bodyParser.json())
app.use(compression());
app.use(helmet());
app.use(addRequestId());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
const userRouter = require('./api/routes/user')
const empMasterRouter = require('./api/routes/empMaster');
const leaveRouter = require('./api/routes/leave');
const kraRouter = require('./api/routes/kra');
const companyPolicyRouter = require('./api/routes/companyPolicy');
const finalReviewRouter = require('./api/routes/finalReview');
const holidayCalenderRouter = require('./api/routes/holidayCalender');
const policyMasterRouter = require('./api/routes/policyMaster');
const jobHistoryRouter = require('./api/routes/jobHistory');
const compensationDetailRouter = require('./api/routes/compensationDetail');
const weeklyTimeSheetRouter = require('./api/routes/weeklyTimeSheet');
const certificationRouter = require('./api/routes/certification');
const taskTrackerRouter = require('./api/routes/taskTracker');



app.use('/user', userRouter)
app.use('/empMaster', empMasterRouter)
app.use('/leave', leaveRouter)
app.use('/kra', kraRouter)
app.use('/companyPolicy', companyPolicyRouter)
app.use('/finalReview', finalReviewRouter)
app.use('/holidayCalender', holidayCalenderRouter)
app.use('/policyMaster', policyMasterRouter)
app.use('/jobHistory', jobHistoryRouter)
app.use('/compensationDetail', compensationDetailRouter)
app.use('/weeklyTimeSheet', weeklyTimeSheetRouter)
app.use('/certification', certificationRouter)
app.use('/taskTracker', taskTrackerRouter)

exports.app = app;
