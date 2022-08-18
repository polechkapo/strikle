require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const { createServer } = require('http'); // поля
const { sequelize } = require('./db/models');

const app = express();
config(app);
const createSocketServer = require('./socket');

const server = createServer(); // поля

app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
require('./mw/session')(app);

server.on('request', app);
server.listen(process.env.PORT, async () => {
  console.log(`Сервер отлично шуршит на ${process.env.PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База зашуршала');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

createSocketServer(server);
