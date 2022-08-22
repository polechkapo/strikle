/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../store/userReducer/reducer';
import { loadGenres } from '../store/genresReducer/reducer';

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [genresArr, setGenresArr] = useState([]);
  const genres = useSelector((state) => state.genres);
  console.log(user, 'profile user');
  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  const handleButton = (event) => {
    event.preventDefault();
    const value = event.target.id;
    if (!genresArr.includes(value)) {
      if (genresArr.length < 5) {
        setGenresArr([...genresArr, value]);
        event.target.style.backgroundColor = 'red';
      }
    } else {
      setGenresArr(genresArr.filter((el) => el !== value));
      event.target.style.backgroundColor = 'transparent';
    }
  };

  const handlerUloadPhoto = async (e) => {
    // console.log(e.target.files);
    try {
      const picturesData = [...e.target.files];
      const file = new FormData();
      picturesData.forEach((img) => {
        file.append('homesImg', img);
      });
      const response = await fetch('/api/multer/edit', {
        method: 'PUT',
        body: file,
      });
      const test = await response.json();
      return test;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.name.value;
    const password = event.target.password.value;
    const oldPassword = event.target.oldPassword.value;
    const checkPassword = event.target.checkPassword.value;
    const city = event.target.city.value;
    const bio = event.target.bio.value;

    dispatch(editUser({
      email, username, oldPassword, password, checkPassword, city, bio,
    }));
    navigate('/cabinet');
  };

  return (
    <div>
      <h1>Личный кабинет</h1>
      {user
        ? (
          <>
            <label htmlFor="avatar">
              <div className="avatar">
                <img className="photo" src={`${user.user.avatar}`} alt="avatar" style={{ width: 100 }} />
              </div>
              <form action="/multer" method="post">
                <input type="file" onChange={handlerUloadPhoto} />
              </form>
            </label>
            <form onSubmit={handleForm}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={user.user.email}
                pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
                title="Введите действующую почту"
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder={user.user.username}
              />
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
              <input type="text" id="city" name="city" placeholder={user.user.city} />
              <textarea name="bio" id="bio" cols="30" rows="10" placeholder={user.user.bio} />

              <input type="text" placeholder="Поиск исполнителя" />
              <button type="submit">Поиск</button>
              <button type="submit" onClick={() => navigate(-1)}>Назад</button>

              <button type="submit">Сохранить изменения</button>
            </form>
            <div>
              <h1>Выбери любимые жанры:</h1>
              <div>
                {genres.genres && genres.genres.map((genre) => (
                  <button key={genre.id} id={genre.id} type="button" onClick={handleButton}>
                    {genre.title}
                  </button>
                ))}
              </div>
            </div>

          </>
        )
        : <div>Loading</div>}
    </div>
  );
}

export default Profile;
