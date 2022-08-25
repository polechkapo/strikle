/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from './socket';
import Chat from './Chat';
import {
  addedRoomId, isJoin, loadMessage, loadPairs, setUsers,
} from '../store/chatReducer/reducer';
import './chat.css';

export default function InputChat() {
  const dispatch = useDispatch();
  // const [userId, setUserid] = useState('');
  const joined = useSelector((state) => state.chats.joined);
  const user1 = useSelector((state) => state.user.user);
  const pair = useSelector((state) => state.chats.pairs);

  // const onEnter = async () => {

  // };

  useEffect(() => {
    dispatch(loadPairs());
    // return () => {
    //   dispatch(isJoin(false));
    // };
  }, []);

  async function onJoin(event) {
    const userId = event.target.parentElement.id;
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        user_id_2: userId,
      }),
    });
    const data = await response.json();
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
  }

  window.socket = socket;

  return (
    <>
      <div className="chat-page">
        {!joined ? (
          <div className="chat_startpage">
            <p className="chat__press">Нажмите на собеседника, чтобы начать с ним чат</p>
            {/* <input type="number" placeholder="Введи ID собеседника" value={userId} onChange={(e) => setUserid(e.target.value)} />
          <button type="button" onClick={onEnter}>Войти</button> */}
          </div>
        ) : (<Chat />)}

        <div className="pairs">
          {pair && pair.map((el) => (
            <div key={el.id} id={el.id} onClick={onJoin} className="user_mess">
              <img className="user__mess-avatar" src={`${el.avatar}`} alt="" />
              <p>{el.username}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
