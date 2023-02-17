//Created by Rohini on 22nd november

const { DataTypes } = require('sequelize');

const weeklyTimeSheetSchema = {
  schema: {
    srNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
        type: DataTypes.INTEGER,
    },
    emp_name: {
      type: DataTypes.STRING,
    },
    hours: {
      type: DataTypes.FLOAT,
    },
    date: {
      type: DataTypes.DATE,
    },
    major_activities: {
        type: DataTypes.STRING,
    },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = weeklyTimeSheetSchema;
