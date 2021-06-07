const express = require('express');
const cors = require('cors');

const { config } = require('./config');
const db = require('./db');
const router = require('./network/routes');

function createApp() { 
  const uri = 'mongodb://' + config.dbHost + ':' + config.dbPort + '/' + config.dbName;
  //const uri = 'mongodb://' + config.dbUser + ':' + config.dbPassword + '@' + config.dbHost + ':' + config.dbPort + '/' + config.dbName;
  db(uri);

  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use(express.urlencoded({extended: false}));
  router(app);

  return app;
}

module.exports = createApp;
