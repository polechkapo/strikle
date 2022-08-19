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
const photoUploadFileRouter = require('./routers/upload.router');
const refreshRouter = require('./routers/refresh.router');
const loginSpotifyRouter = require('./routers/spotifyLogin.router');
const lyricsRouter = require('./routers/lyrics.router');
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
config(app);
const createSocketServer = require('./socket');
const server = createServer(); // поля
require('./mw/session')(app);

app.use('/api', regRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/session', sessionRouter);
app.use('/api', genreRouter);
app.use('/api/login', loginRouter);
app.use('/api/multer', photoUploadFileRouter);
app.use('/api/refresh', refreshRouter);
app.use('/login', loginSpotifyRouter);
app.use('/lyrics', lyricsRouter);


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
