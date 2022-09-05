/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import socket from './socket';
import './chat.css';

export default function Chat() {
  const userAuth = useSelector((state) => state.user);
  const [messageValue, setMessagevalue] = useState('');
  const chat = useSelector((state) => state.chats);
  const messagesRef = useRef(null);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      user_id: userAuth.user.id,
      chat_id: chat.roomId,
      user_text: messageValue,
    });
    setMessagevalue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 9999);
  }, [chat]);

  return (
    <div className="chat">
      <div className="user-online">
        <div>
          {chat.usersInRoom && chat.usersInRoom.map((user) => <p key={user.id}>{user.username}</p>)}
        </div>
      </div>
      <div ref={messagesRef} className="chat-messages">
        {!chat.messages ? (<p>Загрузка....</p>) : (chat.messages.map((mesage) => (
          <div className={mesage.user_id === userAuth.user.id ? 'messages-me' : 'messages-notme'} key={mesage.id}>
            <span>{mesage['User.username']}</span>
            <p>{mesage.user_text}</p>
          </div>
        )))}
      </div>
      <form className="comments_form chat_form">
        <input value={messageValue} row="2" onChange={(e) => setMessagevalue(e.target.value)} className="input_chat" placeholder="Напиши что-нибудь здесь" />
        <button onClick={onSendMessage} type="button" className="btnChat">Отправить</button>
      </form>
    </div>
  );
}
