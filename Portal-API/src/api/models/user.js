const { DataTypes } = require('sequelize');

const userSchema = {
  schema: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
  },
  options: {
    freezeTableName: true,
    timestamps: false,
  },
};

module.exports = userSchema;
