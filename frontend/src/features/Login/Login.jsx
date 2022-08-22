import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/userReducer/reducer';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    dispatch(loginUser({ email, password }));
    navigate('/');
  }

  return (
    <div id="bodyReg1" className="logContainer">
      <div className="formLog">
        <form id="formReg1" onSubmit={handleLogin}>
          <h1 className="h1Login" id="h1Main">С возвращением!</h1>
          <input id="emailLog" type="email" name="email" placeholder="Введите почту" />
          <input id="passwordLog" type="password" name="password" placeholder="Введите пароль" />
          <button className="btnLogin" type="submit">Подключиться</button>
        </form>
      </div>
      <div className="divLog" />
      <div className="imgLog1" />
      <div className="imgLog2" />
      <div className="imgLog3" />
      <div className="imgLog4" />
      <div className="imgLog5" />
      <div className="imgLog6" />
      <div className="imgLog7" />
      <div className="imgLog8" />
    </div>
  );
}
