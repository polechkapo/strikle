require('dotenv').config();
const express = require('express');
// поля
const { sequelize } = require('./db/models');
const config = require('./config/config');
const regRouter = require('./routers/reg.router');
const favoriteRouter = require('./routers/favorite.router');
const sessionRouter = require('./routers/auth.router');
const genreRouter = require('./routers/genre.router')
const loginRouter = require('./routers/login.router');
const editProfileRouter = require('./routers/profile.router')
const photoUploadFileRouter = require('./routers/upload.router');
const refreshRouter = require('./routers/refresh.router');
const loginSpotifyRouter = require('./routers/spotifyLogin.router');
const logoutRouter = require('./routers/logout.routers');
const lyricsRouter = require('./routers/lyrics.router');
const bodyParser = require("body-parser");
const artistsRouter = require('./routers/artists.router');
const editPassRouter = require('./routers/password.router');
const likesRouter = require('./routers/likes.router');
const chatRouter = require('./routers/chat.router')

const app = express();
app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
config(app);
const server = require('http').Server(app);
const io = require('socket.io')(server)
require('./mw/session')(app);

app.use('/api', regRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api', sessionRouter);
app.use('/api', genreRouter);
app.use('/api', likesRouter);
app.use('/api', artistsRouter);
app.use('/api/login', loginRouter);
app.use('/api/multer', photoUploadFileRouter)
app.use('/api', editProfileRouter)
app.use('/api/refresh', refreshRouter);
app.use('/login', loginSpotifyRouter);
app.use('/lyrics', lyricsRouter);
app.use('/api', editPassRouter);
app.use('/api', chatRouter)
app.use(logoutRouter);

io.on('connection', (socket) => {
  console.log(socket.to, 'SOCKET!!!!!');
  socket.on('ROOM:JOIN', (data) => {
    console.log(data, 'DATA SOCKET');
    socket.join(data.room_id)
    socket.to(data.room_id).emit('ROOM:JOINED', { message: 'JOINNN!@!WE!@@!@' })
  })



  console.log('user connection', socket.id);
});

server.listen(process.env.PORT, async () => {
  console.log(`Сервер отлично шуршит на ${process.env.PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База зашуршала');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
