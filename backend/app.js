require('dotenv').config();
const express = require('express');
const { createServer } = require('http'); // поля
const path = require('path');

const app = express();
const createSocketServer = require('./socket');
// поля
const server = createServer(); // поля
// const tems = require('./routes/tems');
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

// Static content: web-client path AS virtual, server path
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/avatars', express.static(path.resolve('uploads')));
app.use(express.static(path.resolve('public')));

require('./mw/session')(app);

const { sequelize } = require('./db/models');

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
