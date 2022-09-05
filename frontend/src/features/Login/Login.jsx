import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/userReducer/reducer';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, errorMessage } = useSelector((state) => state.user);
  console.log(user, '<------------------- это юзер');
  async function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(loginUser({ email, password }));
    if (errorMessage) {
      document.querySelector('form').reset();
    }
  }
  useEffect(() => {
    console.log(10);
    return () => navigate('/');
  }, []);

  return (
    <div id="bodyReg1" className="logContainer">
      <div className="formLog">
        <form id="formReg1" onSubmit={handleLogin}>
          <h1 className="h1Login" id="h1Main">С возвращением</h1>
          <input id="emailLog" type="email" name="email" placeholder="Введите почту" />
          <input id="passwordLog" type="password" name="password" placeholder="Введите пароль" />
          <button className="btnLogin" type="submit">Подключиться</button>
          {errorMessage && <p>{errorMessage}</p>}
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
