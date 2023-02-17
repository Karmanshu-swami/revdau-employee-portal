//Created by Rohini on 23rd november

const { DataTypes } = require('sequelize');

const certificationSchema = {
  schema: {
    c_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
    },
    certificate_name: {
      type: DataTypes.STRING,
    },
    issued_on: {
      type: DataTypes.DATE,
    },
    issued_by: {
      type: DataTypes.STRING,
    },
    valid_through: {
      type: DataTypes.DATE,
    },
    current_status: {
      type: DataTypes.STRING,
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

module.exports = certificationSchema;