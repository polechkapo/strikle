import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  async function handleLogin(event) {
    event.preventDefault();
    const {
      email, password, action, method,
    } = event.target;
    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (data.login) {
      navigate('/');
    }
  }
  return (
    <div>
      <form action="/api/login" method="post" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Введите почту" />
        <input type="password" name="password" placeholder="Введите пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
