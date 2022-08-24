/* eslint-disable no-param-reassign */
import React from 'react';
import { useDispatch } from 'react-redux';
import { editPassUser } from '../store/userReducer/reducer';

function ChangePassword() {
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const oldPassword = event.target.oldPassword.value;
    const checkPassword = event.target.checkPassword.value;

    dispatch(editPassUser({
      oldPassword, password, checkPassword,
    }));
    // navigate('/cabinet');
  };

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
        <button className="btnLogin" id="btnProfile" type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default ChangePassword;
