import React from "react";

export default function Login() {
  async function handleLogin() {
    event.preventDefault()
    const { email, password, action, method } = event.target

    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      })
    })

    const data = await response.json()
    console.log(data);
  }
  return (
    <div>
      <form action="/api/login" method="post" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Введите почту"/>
        <input type="text" name="password" placeholder="Введите пароль"/>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}