const { DataTypes } = require('sequelize');

const leaveSchema = {
  schema: {
    leave_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
    },
    leave_from: {
      type: DataTypes.DATE,
    },
    leave_to: {
      type: DataTypes.DATE,
    },
    reason: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    leave_type: {
      type: DataTypes.STRING,
    },
    no_of_leave: {
      type: DataTypes.INTEGER,
    },

  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = leaveSchema;
