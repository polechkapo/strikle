require('dotenv').config();
const express = require('express');
const { createServer } = require('http'); // поля
const { sequelize } = require('./db/models');
const config = require('./config/config');
const regRouter = require('./routers/reg.router');
const favoriteRouter = require('./routers/favorite.router');
const sessionRouter = require('./routers/auth.router');
const genreRouter = require('./routers/genre.router')
const loginRouter = require('./routers/login.router');
const photoUploadFileRouter = require('./routers/upload.router')


const app = express();
config(app);
const createSocketServer = require('./socket');

const server = createServer(); // поля

app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
// Static content: web-client path AS virtual, server path
// app.use(express.static(path.join(__dirname, '../client/build')));

// app.use(express.static(path.resolve('public')));

require('./mw/session')(app);

app.use('/multer', photoUploadFileRouter);
app.use('/api/reg', regRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/session', sessionRouter);
app.use('/api/genre', genreRouter);
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
