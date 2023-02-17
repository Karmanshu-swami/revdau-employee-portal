//Created by Rohini on 21st november

const { DataTypes } = require('sequelize');

const jobHistorySchema = {
  schema: {
    jh_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
        type: DataTypes.INTEGER,
    },
    job1_title: {
      type: DataTypes.STRING,
    },
    job1_company: {
      type: DataTypes.STRING,
    },
    job1_start_date: {
      type: DataTypes.DATE,
    },
    job1_end_date: {
        type: DataTypes.DATE,
    },
    job2_title: {
        type: DataTypes.STRING,
    },
    job2_company: {
        type: DataTypes.STRING,
    },
    job2_start_date: {
        type: DataTypes.DATE,
    },
    job2_end_date: {
        type: DataTypes.DATE,
    },
    job3_title: {
        type: DataTypes.STRING,
    },
    job3_company: {
        type: DataTypes.STRING,
    },
    job3_start_date: {
        type: DataTypes.DATE,
    },
    job3_end_date: {
        type: DataTypes.DATE,
    },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = jobHistorySchema;
