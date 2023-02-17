//Created by Rohini on 24th november

const { DataTypes } = require('sequelize');

const taskTrackerSchema = {
  schema: {
    task_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
    },
    project_name:{
      type: DataTypes.STRING,
    },
    task_name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.STRING,
    },
    assigned_by: {
      type: DataTypes.INTEGER,
    },
    task_status: {
        type: DataTypes.STRING,
    },
    start_date: {
        type: DataTypes.DATE,
    },
    end_date: {
        type: DataTypes.DATE,
    },
    remark: {
        type: DataTypes.STRING,
    },

  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = taskTrackerSchema;