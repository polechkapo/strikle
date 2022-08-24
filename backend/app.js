require('dotenv').config();
const config = require('./config/config');
const express = require('express');
const { sequelize } = require('./db/models');
const { Message, User } = require('./db/models')
const regRouter = require('./routers/reg.router');
const favoriteRouter = require('./routers/favorite.router');
const sessionRouter = require('./routers/auth.router');
const genreRouter = require('./routers/genre.router')
const loginRouter = require('./routers/login.router');
const editProfileRouter = require('./routers/profile.router')
const photoUploadFileRouter = require('./routers/upload.router');
const refreshRouter = require('./routers/refresh.router');
const loginSpotifyRouter = require('./routers/spotifyLogin.router');
const profileSpotifyRouter = require('./routers/spotifyProfile.router')
const logoutRouter = require('./routers/logout.routers');
const lyricsRouter = require('./routers/lyrics.router');
const bodyParser = require("body-parser");
const artistsRouter = require('./routers/artists.router');
const editPassRouter = require('./routers/password.router');
const likesRouter = require('./routers/likes.router');
const eventsRouter = require('./routers/events.router');
const chatRouter = require('./routers/chat.router')
const loadPairsRouter = require('./routers/chatpage.router')

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
config(app);

require('./mw/session')(app);

app.use(logoutRouter);
app.use('/login', loginSpotifyRouter);
app.use('/lyrics', lyricsRouter);
app.use('/loginspotify', profileSpotifyRouter)
app.use('/api', editPassRouter);
app.use('/api', eventsRouter);
app.use('/api', regRouter);
app.use('/api', loadPairsRouter)
app.use('/api', editProfileRouter)
app.use('/api', chatRouter)
app.use('/api', sessionRouter);
app.use('/api', genreRouter);
app.use('/api', likesRouter);
app.use('/api', artistsRouter);
app.use('/api/login', loginRouter);
app.use('/api/multer', photoUploadFileRouter)
app.use('/api/favorite', favoriteRouter);
app.use('/api/refresh', refreshRouter);

try {
  io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', (data) => {
      const users = [...data.usersJoined]

      socket.join(data.room_id)
      socket.to(data.room_id).emit('ROOM:JOINED', users)
    })

    socket.on('ROOM:NEW_MESSAGE', async ({ chat_id, user_id, user_text }) => {
      const setMessage = await Message.create({ chat_id, user_id, user_text }, { raw: true })
      const newMessage = await Message.findOne({
        where: { id: setMessage.id }, raw: true, include: [{
          model: User
        }]
      })
      io.to(chat_id).emit('ROOM:NEW_MESSAGES', newMessage)
    })
    // socket.on('disconnect', () => {
    //   console.log(room, 'TUT RABOTAEM');
    //   socket.on(room).emit('ROOM:LEAVE', '')
    // })

    console.log('user connection', socket.id);
  });
} catch (error) {
  console.log(error.message);
}

server.listen(process.env.PORT, async () => {
  console.log(`Сервер отлично шуршит на ${process.env.PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База зашуршала');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
