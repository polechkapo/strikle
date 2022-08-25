/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { editArrGenres, editGenre } from '../store/genresReducer/reducer';

function ChangeGenres() {
  const userGenre = useSelector((state) => state.genres.userGenre);
  const oldUserGenre = userGenre.map((el) => el.Genre.id);
  const genres = useSelector((state) => state.genres);
  const [genresModal, setGenresModal] = useState(false);
  const [genresArr, setGenresArr] = useState([]);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {

  }, []);
  console.log(genresArr, 'genresArr', oldUserGenre);
  const handleButton = (event) => {
    event.preventDefault();
    const value = Number(event.target.id);
    if (oldUserGenre.includes(Number(value))) {
      dispatch(editArrGenres(Number(value)));
    } if (!genresArr.includes(value)) {
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
    dispatch(editGenre(genresArr));
    setGenresModal(!genresModal);
    // navigate('/cabinet');
  };

  return (
    <>
      <h4 className="h1Profile">Твои любимые жанры:</h4>
      <div id="divGenres">
        {userGenre.map((genre) => (
          <p className="favGen" key={genre.id} id={genre.id}>
            {genre.Genre.title}
          </p>
        ))}
      </div>
      <button
        className="btnLogin"
        id="btnProfile"
        type="button"
        onClick={() => {
          setGenresModal(!genresModal);
          setGenresArr(oldUserGenre);
        }}
      >
        Изменить

      </button>
      {genresModal
        && (
          <div className="modal modal__edit-bg">
            <div className="modal__content modal_edit modal__match">
              <h4 className="h1Profile">Выбери новые жанры:</h4>
              <div className="divGenres" id="divGenres">
                {genres.genres && genres.genres.map((genre) => (
                  <button className={!oldUserGenre.includes(genre.id) ? 'favGen' : 'favGenOld'} key={genre.id} id={genre.id} type="button" onClick={handleButton}>
                    {genre.title}
                  </button>
                ))}
              </div>
              <div className="buttons__control">
                <button className="btnLogin btnGenres" type="button" onClick={handleButtons}>Изменить</button>
                <button className="btnLogin btnGenres" type="button" onClick={() => setGenresModal(false)}>Назад</button>
              </div>
            </div>
          </div>
        )}

    </>
  );
}

export default ChangeGenres;
