// local imports

const { DbDatasource } = require('../../datasources');
// All Schemas
const userSchema = require('./user');
const empMasterSchema = require('./empMaster');
const kraSchema = require('./kra');
const leaveSchema = require('./leave');
const companyPolicySchema = require('./companyPolicy');
const finalReviewSchema = require('./finalReview');
const holidayCalenderSchema = require('./holidayCalender');
const policyMasterSchema = require('./policyMaster');
const jobHistorySchema = require('./jobHistory');
const compensationDetailSchema = require('./compensationDetail');
const weeklyTimeSheetSchema = require('./weeklyTimeSheet');
const certificationSchema = require('./certification');
const taskTrackerSchema = require('./taskTracker');

let dbManager;

exports.getDbManager = () => {
  if (dbManager) return Promise.resolve(dbManager);
  return createDBManager();
};

async function createDBManager() {
  console.log('createDBManager() triggered ....');

  try {
    const dbConn = await DbDatasource;

    const User = dbConn.define('user', userSchema.schema, userSchema.options);
    const Employee_master = dbConn.define('employee_master', empMasterSchema.schema, empMasterSchema.options);
    const Kra = dbConn.define('kra', kraSchema.schema, kraSchema.options);
    const Leavee = dbConn.define('leavee', leaveSchema.schema, leaveSchema.options);
    const Company_policy = dbConn.define('company_policy', companyPolicySchema .schema, companyPolicySchema .options);
    const Final_review = dbConn.define('final_review', finalReviewSchema .schema, finalReviewSchema .options);
    const Holiday_calender = dbConn.define('holiday_calender', holidayCalenderSchema.schema, holidayCalenderSchema.options);
    const Policy_master = dbConn.define('policy_master', policyMasterSchema.schema, policyMasterSchema.options);
    const Job_history = dbConn.define('job_history', jobHistorySchema.schema, jobHistorySchema.options);
    const Compensation_detail = dbConn.define('compensation_detail', compensationDetailSchema.schema, compensationDetailSchema.options);
    const Weekly_time_sheet = dbConn.define('weekly_time_sheet', weeklyTimeSheetSchema.schema, weeklyTimeSheetSchema.options);
    const Certification = dbConn.define('certification', certificationSchema.schema, certificationSchema.options);
    const Task_tracker = dbConn.define('task_tracker', taskTrackerSchema.schema, taskTrackerSchema.options);
    
    dbManager = {
      User,
      Employee_master,
      Kra,
      Leavee,
      Company_policy,
      Final_review,
      Holiday_calender,
      Policy_master,
      Job_history,
      Compensation_detail,
      Weekly_time_sheet,
      Certification,
      Task_tracker,
      
    };

    return dbManager;
  } catch (error) {
   console.log('Error occured while creating DB Manager !!!');
    console.log(error);
    process.exit(0);
  }
}

// create DB Manager
createDBManager();
