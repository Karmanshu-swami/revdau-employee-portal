//Created by Rohini on 14th october

const { DataTypes } = require('sequelize');

const finalReviewSchema = {
  schema: {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
    },
    final_review_by_manager: {
      type: DataTypes.STRING,
    },
    final_comment_by_hr: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    increment: {
      type: DataTypes.DECIMAL(15,3),
    },
    acknowledgement: {
        type: DataTypes.STRING,
      },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = finalReviewSchema;
