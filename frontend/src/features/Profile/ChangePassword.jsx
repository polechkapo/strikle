import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPassUser, falseMessage } from '../store/userReducer/reducer';

function ChangePassword() {
  const dispatch = useDispatch();
  const { checkEditPassword } = useSelector((state) => state.user);
  const handleForm = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const oldPassword = event.target.oldPassword.value;
    const checkPassword = event.target.checkPassword.value;

    dispatch(editPassUser({
      oldPassword, password, checkPassword,
    }));
  };
  if (checkEditPassword) {
    document.querySelector('#changePass').reset();
    setTimeout(() => {
      dispatch(falseMessage(false));
    }, 5000);
  }
  return (
    <div>
      <h1 id="h1Main" className="h1Profile">Изменение пароля</h1>
      <form id="changePass" onSubmit={handleForm}>

        {/* Password */}
        <input
          type="password"
          className="passwordProfile"
          name="oldPassword"
          // id="oldPassword"
          placeholder="Введи старый пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />
        <input
          className="passw"
          type="password"
          name="password"
          // id="password"
          placeholder="Введи новый пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />
        <input
          className="checkPass"
          type="password"
          name="checkPassword"
          // id="checkPassword"
          placeholder="Введи новый пароль еще раз"
        />
        {checkEditPassword && (
          <div>
            <p>Изменения успешно применены</p>
          </div>
        )}
        <button className="btnLogin" id="btnProfile" type="submit" name="button">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default ChangePassword;
