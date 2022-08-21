/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { editUser } from '../store/userReducer/reducer';
import { loadUserGenres } from '../store/genresReducer/reducer';

function ChangeGenres() {
  const user = useSelector((state) => state.user);
  const userGenre = useSelector((state) => state.genres.userGenre);
  const [genresArr, setGenresArr] = useState([]);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  console.log(user, 'profile user');
  useEffect(() => {
    dispatch(loadUserGenres());
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

  return (
    <>
      <h1>Выбери любимые жанры:</h1>
      <div>
        {userGenre && userGenre.map((genre) => (
          <button key={genre.id} id={genre.id} type="button" onClick={handleButton}>
            {genre.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default ChangeGenres;
