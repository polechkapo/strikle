/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socket from './socket';
import './chat.css';

export default function Chat() {
  const userAuth = useSelector((state) => state.user);
  const [messageValue, setMessagevalue] = useState('');
  const chat = useSelector((state) => state.chats);
  console.log(chat, 'CHAT USERROOM');

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      user_id: userAuth.user.id,
      chat_id: chat.roomId,
      user_text: messageValue,
    });
  };

  useEffect(() => {
    console.log('privet');
  }, []);

  return (
    <div className="chat">
      <div className="user-online">
        <b>В сети</b>
        <ul>
          {chat.usersInRoom && chat.usersInRoom.map((user) => <li key={user.id}>{user.username}</li>)}
        </ul>
      </div>
      <div className="chat-messages">
        {!chat.messages ? (<p>Загрузка....</p>) : (chat.messages.map((mesage) => (
          <div className="messages" key={mesage.id}>
            <p>{mesage.user_text}</p>
            <span>{mesage['User.username']}</span>
          </div>
        )))}
      </div>
      <form>
        <textarea value={messageValue} rows="3" onChange={(e) => setMessagevalue(e.target.value)} />
        <button onClick={onSendMessage} type="button">Отпривить</button>
      </form>
    </div>
  );
}
