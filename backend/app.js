require('dotenv').config();
const express = require('express');
const { createServer } = require('http'); // поля
const { sequelize } = require('./db/models');
const config = require('./config/config');
const regRouter = require('./routers/reg.router');
const favoriteRouter = require('./routers/favorite.router');
const sessionRouter = require('./routers/auth.router');
const genreRouter = require('./routers/genre.router')
const loginRouter = require('./routers/login.router')

const app = express();
config(app);
const createSocketServer = require('./socket');

const server = createServer(); // поля

app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
require('./mw/session')(app);

app.use('/api', regRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/session', sessionRouter);
app.use('/api', genreRouter);
app.use('/api/login', loginRouter);

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
