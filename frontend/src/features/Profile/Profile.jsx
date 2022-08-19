import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../store/userReducer/reducer';
import { loadGenres } from '../store/genresReducer/reducer';

function Profile() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [genresArr, setGenresArr] = useState([]);
  const genres = useSelector((state) => state.genres);

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
    const oldPassword = event.target.oldPassword.value;
    const checkPassword = event.target.checkPassword.value;
    const gender = event.target.gender.value;
    const birthdate = event.target.birth.value;
    const city = event.target.city.value;
    const bio = event.target.bio.value;

    console.log(avatar, 'form');
    dispatch(editUser({
      email, username, oldPassword, password, checkPassword, gender, birthdate, city, bio,
    }));
    navigate('/cabinet');
  };

  return (
    <div>
      <h1>Личный кабинет</h1>
      <label htmlFor="avatar">
        <div className="avatar">
          <img className="photo" src={`${user.avatar}`} alt="avatar" style={{ width: 100 }} />
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
          value={user.email}
          required
          pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
          title="Введите действующую почту"
        />
        <input
          type="text"
          name="name"
          id="name"
          value={user.username}
        />
        <input
          type="password"
          name="oldPassword"
          id="oldPassword"
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

        <select name="gender">
          <option disabled value={user.gender}>Пол</option>
          <option value="Ж">Ж</option>
          <option value="М">М</option>
        </select>
        <label htmlFor="birth">
          Изменение даты рождения
          <input value={user.birth_date}
            type="date"
            id="birth"
            name="birth"
            min="1950-01-01"
            max="2004-01-01"
          />
        </label>
        <input type="text" id="city" name="city" value={user.city} />
        <textarea name="bio" id="bio" cols="30" rows="10" value={user.bio} />

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

    </div>
  );
}

export default Profile;
