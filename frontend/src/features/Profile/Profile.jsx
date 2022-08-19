import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { updateUser } from '../store/userReducer/reducer';
// import empty from '../Multer/empty.jpeg';

function Profile() {


  return (
    <div>
      <h1>Личный кабинет</h1>
      <div>
        <img src={user.avatar} alt="avatar" />
        <ul>
          <li>
            <b>Имя: {user.username}</b>
          </li>
          <li>
            <b>E-mail: {user.email}</b>
          </li>
          <li>
            <b>Пароль: {user.password}</b>
          </li>
          <li>
            <b>Дата рождения: {user.birth_date}</b>
          </li>
          <li>
            <b>Пол: {user.bio}</b>
          </li>
          <li>
            <b>Город: {user.city}</b>
          </li>
        </ul>
      </div>
      <ul>
        {favorite.map((artist) => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>{artist.photo}</Link>
          </li>
        ))}
      </ul>

      <form>
        <input type="text" placeholder="Поиск музыки" />
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Profile;
