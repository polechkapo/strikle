import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../store/userReducer/reducer';
import empty from '../Multer/empty.jpeg';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);

  const handlerUloadPhoto = useCallback(async (e) => {
    console.log(e.target.files);
    try {
    const picturesData = [...e.target.files];
    const file = new FormData();
      picturesData.forEach((img) => {
        file.append('homesImg', img);
      });
      const response = await fetch('/api/multer', {
        method: 'POST',
        body: file,
      });
      const test = await response.json();
      setPhoto(test);
    } catch (error) {
      console.log(error.message);
    }
  });

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.name.value;
    const password = event.target.password.value;
    const checkPassword = event.target.checkPassword.value;
    const gender = event.target.gender.value;
    const birthdate = event.target.birth.value;
    const city = event.target.city.value;
    const bio = event.target.bio.value;
    const avatar = photo;
    console.log(avatar, 'form');
    dispatch(updateUser({
      email, username, password, checkPassword, gender, birthdate, city, bio, avatar,
    }));
    navigate('/cabinet');
  };

  return (
    <div>
      <h1>Личный кабинет</h1>
      <form onSubmit={handleForm}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Тут будет старый email"
          required
          pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
          title="Введите действующую почту"
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Тут будет имя"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Введи старый пароль"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Введи новый пароль"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />
        <input type="password" name="checkPassword" id="checkPassword" placeholder="Введи новый пароль еще раз" />

        <label htmlFor="avatar">
          <div className="avatar">
            {
              photo
                ? <img className="photo" src={photo} alt="avatar" style={{ width: 100 }} />
                : <img className="photo" src={`${empty}`} alt="avatar" />
            }
          </div>
          <form action="/multer" method="post">
            <input type="file" onChange={handlerUloadPhoto} />
          </form>
        </label>

        <select name="gender">
          <option disabled>Твой пол</option>
          <option value="Ж">Ж</option>
          <option value="М">М</option>
        </select>
        <label htmlFor="birth">
          Тут будет твой день рождения
          <input
            type="date"
            id="birth"
            name="birth"
            min="1950-01-01"
            max="2004-01-01"
          />
        </label>
        <input type="text" id="city" name="city" placeholder="Тут будет город" />
        <textarea name="bio" id="bio" cols="30" rows="10" placeholder="Тут будут предпочтения" />

        <input type="text" placeholder="Поиск исполнителя" />
        <button type="submit">Поиск</button>
        <button type="submit" onClick={() => navigate('/')}>Пропустить</button>

        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default Profile;
