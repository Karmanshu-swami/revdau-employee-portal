const { DataTypes } = require('sequelize');

const holidayCalenderSchema = {
  schema: {
    srNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // emp_id: {
    //   type: DataTypes.INTEGER,
    // },
    date: {
      type: DataTypes.DATE,
    },
    holiday_name: {
      type: DataTypes.STRING,
    },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = holidayCalenderSchema;
