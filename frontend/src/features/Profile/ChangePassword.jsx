import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ChangePassword() {

  return (
    <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                placeholder="Введи старый пароль"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Введи новый пароль"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              />
              <input type="password" name="checkPassword" id="checkPassword" placeholder="Введи новый пароль еще раз" />

  )

}

export default ChangePassword;
