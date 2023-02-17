const { DataTypes } = require('sequelize');

const companyPolicySchema = {
  schema: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
    },
    code_of_conduct_policy: {
      type: DataTypes.STRING,
    },
    conflict_of_interest_policy: {
      type: DataTypes.STRING,
    },
    exit_policy: {
      type: DataTypes.STRING,
    },
    leave_policy: {
      type: DataTypes.STRING,
    },
    performance_appraisal_and_salary_review_policy: {
        type: DataTypes.STRING,
    },
    probation_policy: {
        type: DataTypes.STRING,
    },
    the_whistleblower_policy: {
        type: DataTypes.STRING,
    },
    voilence_in_the_workshop_policy: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = companyPolicySchema;
