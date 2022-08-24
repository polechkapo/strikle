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
      <h4 className="h1Profile">Ваши любимые жанры</h4>
      <div id="divGenres">
        {userGenre.map((genre) => (
          <button className="favGen" key={genre.id} id={genre.id} type="button">
            {genre.Genre.title}
          </button>
        ))}
      </div>
      <h4 className="h1Profile">Выбери новые жанры:</h4>
      <div className="divGenres" id="divGenres">
        {genres.genres && genres.genres.map((genre) => (
          <button className="btnGenres" key={genre.id} id={genre.id} type="button" onClick={handleButton}>
            {genre.title}
          </button>
        ))}
      </div>
      <button className="btnMain" id="btnChGen" type="button" onClick={handleButtons}>Изменить</button>
    </>
  );
}

export default ChangeGenres;
