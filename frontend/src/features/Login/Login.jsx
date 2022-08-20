import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/userReducer/reducer';

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
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Введите почту" />
        <input type="password" name="password" placeholder="Введите пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
