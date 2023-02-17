// console.log('process.env: ', process.env);

/**
 * App Settings
 */
exports.APP = {
  host: parseInt(process.env.APP_HOST),
  port: parseInt(process.env.APP_PORT),
};

/**
 * Sequelize ORM Settings for SQL Databases
 */
exports.DB = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
  logging: false, // logging: (...msg) => console.log(msg),
};
