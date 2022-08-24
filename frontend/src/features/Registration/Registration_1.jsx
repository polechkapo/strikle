import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/userReducer/reducer';
import './registration_1/registration_1.css';

function Registration1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.name.value;
    const password = event.target.password.value;
    const checkPassword = event.target.checkPassword.value;

    dispatch(registerUser({
      email, username, password, checkPassword,
    })); // кидаем в санку
    navigate('/profile');
  };

  return (
    <div id="bodyReg1">
      <div id="divReg1">
        <h1 id="h1Main" className="h1reg1">Регистрация</h1>
        <form id="formReg1" onSubmit={handleForm}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Введи email"
            required
            pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
            title="Введите действующую почту"
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Введи свое имя"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Введи пароль"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
          />
          <input type="password" name="checkPassword" id="checkPassword" placeholder="Введи пароль еще раз" />
          <button id="btnReg1" type="submit">Cледующий шаг</button>
        </form>
      </div>
      <div>
        <div id="div_reg1" />
        <div id="div_reg2" />
        <div id="div_reg3" />
      </div>
    </div>
  );
}

export default Registration1;
