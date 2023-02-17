const { DataTypes } = require('sequelize');

const kraSchema = {
  schema: {
    kra_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
    },
    FY: {
      type: DataTypes.STRING,
    },
    quarter: {
      type: DataTypes.INTEGER,
    },
    KRA_description: {
      type: DataTypes.STRING,
    },
    metric: {
        type: DataTypes.STRING,
      },
    weightage: {
        type: DataTypes.FLOAT,
    },
      KRA_measure_of_success: {
        type: DataTypes.STRING,
      },
      milestone1: {
        type: DataTypes.STRING,
      },
      milestone2: {
        type: DataTypes.STRING,
      },
      milestone3: {
        type: DataTypes.STRING,
      },
     achievement: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      manager_comment: {
        type: DataTypes.STRING,
      },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = kraSchema;
