const jwt = require('jsonwebtoken');
require('dotenv').config();

const { APP } = require('./env');
const { DbDatasource } = require('./datasources');
const { app } = require('./app');




// start the app
const start = async () => {
  try {
    await DbDatasource.authenticate();
    console.log(`DB::DB connection is successful`);
    app.listen(process.env.APP_PORT, () => {
      //console.log(`Server IP: ${APP.host}`);
      console.log(`Server is listening at port ${process.env.APP_PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
