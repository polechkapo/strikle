/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from './socket';
import {
  addedRoomId, isJoin, loadMessage, setUsers,
} from '../store/chatReducer/reducer';
import Chat from './Chat';

export default function InputChat() {
  const dispatch = useDispatch();
  const [userId, setUserid] = useState('');
  const joined = useSelector((state) => state.chats.joined);
  const user1 = useSelector((state) => state.user.user);

  const onEnter = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        user_id_2: userId,
      }),
    });
    const data = await response.json();
    console.log(data, 'DATA CHAT');
    socket.emit('ROOM:JOIN', {
      user_id_2: Number(userId),
      user_id_1: user1.id,
      room_id: data.chat.id,
      usersJoined: data.users.filter((user) => user.id === user1.id),
    });
    dispatch(loadMessage(data.chat.id));
    dispatch(addedRoomId(data.chat.id));
    dispatch(setUsers(data.users.filter((user) => user.id !== user1.id)));
    dispatch(isJoin(true));
  };

  window.socket = socket;

  return (
    <>
      {!joined ? (
        <div style={{ margin: '100px' }}>
          <input type="number" placeholder="Введи ID собеседника" value={userId} onChange={(e) => setUserid(e.target.value)} />
          <button type="button" onClick={onEnter}>Войти</button>
        </div>
      ) : (<Chat />)}
    </>
  );
}
