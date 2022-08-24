/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editGenre, loadGenres, loadUserGenres } from '../store/genresReducer/reducer';

function ChangeGenres() {
  const userGenre = useSelector((state) => state.genres.userGenre);
  const genres = useSelector((state) => state.genres);

  const [genresArr, setGenresArr] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUserGenres());
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
    dispatch(editGenre(genresArr));
    navigate('/cabinet');
  };

  return (
    <>
      <div id="changeInfo">
        <h4 className="h1Profile">Ваши любимые жанры</h4>
        {userGenre.map((genre) => (
          <button key={genre.id} id={genre.id} type="button">
            {genre.Genre.title}
          </button>
        ))}
      </div>
      <div className="divGenres" id="divGenres">
        <h4 className="h1Profile">Выбери новые жанры:</h4>
        {genres.genres && genres.genres.map((genre) => (
          <button className="btnGenres" key={genre.id} id={genre.id} type="button" onClick={handleButton}>
            {genre.title}
          </button>
        ))}
        <button type="button" onClick={handleButtons}>Изменить</button>
      </div>
    </>
  );
}

export default ChangeGenres;
