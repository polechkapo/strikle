const ws = require('ws');
const { v4 } = require('uuid');

module.exports = function createSocketServer(server) {
  const wss = new ws.Server({ server });

  wss.on('connection', (ws) => { // подключение к серверу
    console.log('Client connected');
    ws.on('message', (message) => {
      message = JSON.parse(message);
      switch (message.event) {
        case 'message':
          messageToALlClients(message);
          break;

        case 'connection':
          messageToALlClients(message);
          break;

        default:
          break;
      }
    });
  });

  const message = {
    event: 'message/connection',
    id: v4(),
    date: new Date(),
    username: 'Polechka', // здесь нужно имя из сессии
  };

  function messageToALlClients(message) { // отправляем сообщение одного клиента всем подключенным клиентам
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  }
};
