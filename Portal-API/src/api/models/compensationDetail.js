//Created by Rohini on 21st november

const { DataTypes } = require('sequelize');

const compensationDetailSchema = {
  schema: {
    cd_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
        type: DataTypes.INTEGER,
    },
    CP1_CTC: {
      type: DataTypes.DECIMAL,
    },
    CP1_effective_from: {
      type: DataTypes.DATE,
    },
    CP2_CTC: {
        type: DataTypes.DECIMAL,
    },
    CP2_effective_from: {
        type: DataTypes.DATE,
    },
    CP3_CTC: {
        type: DataTypes.DECIMAL,
    },
    CP3_effective_from: {
        type: DataTypes.DATE,
    },
    CP4_CTC: {
        type: DataTypes.DECIMAL,
    },
    CP4_effective_from: {
        type: DataTypes.DATE,
    },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = compensationDetailSchema;
