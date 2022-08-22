/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../store/userReducer/reducer';

function ChangeInfo() {
  const user = useSelector((state) => state.user.user);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [city, setCity] = useState(user.city);
  const [bio, setBio] = useState(user.bio);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.name.value;
    const city = event.target.city.value;
    const bio = event.target.bio.value;

    dispatch(editUser({
      email, username, city, bio,
    }));
    navigate('/cabinet');
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
          title="Введите действующую почту"
        />
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input type="text" id="city" name="city" value={city}
          onChange={(event) => setCity(event.target.value)} />
        <textarea name="bio" id="bio" cols="30" rows="10" value={bio}
          onChange={(event) => setBio(event.target.value)} />

        {/* <input type="text" placeholder="Поиск исполнителя" />
              <button type="submit">Поиск</button>
              <button type="submit" onClick={() => navigate(-1)}>Назад</button> */}

        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default ChangeInfo;
