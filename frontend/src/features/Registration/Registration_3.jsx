/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadGenres, addGenre } from '../store/genresReducer/reducer';

function Registration3() {
  const [genresArr, setGenresArr] = useState([]);
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const userGenre = useSelector((state) => state.genres.userGenre);

  console.log(genres.genres, 'жанры диспатч');
  const navigate = useNavigate();

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

  const handleButtons = () => {
    dispatch(addGenre(genresArr));
    navigate('/');
  };

  console.log(userGenre, 'жанры пользователя');

  return (
    <div>
      <h1>Выбери любимые жанры:</h1>
      <div>
        { genres.genres && genres.genres.map((genre) => (
          <button key={genre.id} id={genre.id} type="button" onClick={handleButton}>
            {genre.title}
          </button>
        ))}
        <button type="button" onClick={handleButtons}>Подключиться</button>
        <button type="submit" onClick={() => navigate('/')}>Пропустить</button>
      </div>
    </div>
  );
}

export default Registration3;
