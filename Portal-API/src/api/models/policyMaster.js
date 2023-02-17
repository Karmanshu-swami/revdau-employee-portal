const { DataTypes } = require('sequelize');

const policyMasterSchema = {
  schema: {
    policy_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    policy_name: {
      type: DataTypes.STRING,
    },
    policy_path: {
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

module.exports = policyMasterSchema;
