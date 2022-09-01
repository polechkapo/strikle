/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadGenres, addGenre } from '../store/genresReducer/reducer';
import './Reg_3.css';

function Registration3() {
  const [genresArr, setGenresArr] = useState([]);
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  useSelector((state) => state.genres.userGenre);

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
        event.target.style.backgroundColor = '#FD608C';
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

  return (
    <div className="genres">
      <h1 id="h1Main" className="genres__title">Выбери любимые жанры:</h1>
      <p className="ganresP">Тебе нужно выбрать 5 любимых жанров</p>
      <div className="genres__content">
        {genres.genres && genres.genres.map((genre) => (
          <button key={genre.id} id={genre.id} type="button" onClick={handleButton} className="genres__button">
            {genre.title}
          </button>
        ))}
      </div>
      <div className="buttons__control">
        <button type="button" onClick={handleButtons} className="genres__button-control">Подключиться</button>
        <button type="submit" onClick={() => navigate('/')} className="genres__button-control">Пропустить</button>
      </div>
    </div>
  );
}

export default Registration3;
