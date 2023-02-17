// global imports
const Sequelize = require('sequelize');
// local imports
const { DB } = require('../env');

module.exports = new Sequelize(DB.database, DB.user, DB.password, {
  host: DB.host,
  port: DB.port,
  dialect: DB.dialect,
  logging: DB.logging,
});

