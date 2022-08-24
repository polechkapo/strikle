/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, {
  useState, useRef, useMemo, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import differenceInYears from 'date-fns/differenceInYears';
import TinderCard from 'react-tinder-card';
import { initUserGenre, loadGenres, loadUsersGenres } from '../store/genresReducer/reducer';
import { addLike, findMatch, loadLikes } from '../store/tinderReducer/reducer';
import './Tinder.css';
import { loadUsers } from '../store/userReducer/reducer';

function Tinder() {
  const { users, user } = useSelector((state) => state.user);
  const { usersGenres, userGenre } = useSelector((state) => state.genres);
  const { likes, match } = useSelector((state) => state.likes);

  const likesCards = likes.map((el) => el.user_id_get);
  const db = users.filter((el) => !likesCards.includes(el.id));
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLikes());
    dispatch(loadUsersGenres());
    dispatch(loadGenres());
    dispatch(loadUsers());
  }, []);

  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () => Array(db.length)
      .fill(0)
      .map((i) => React.createRef()),
    [],
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const calculatePercentOfMatch = (cardUser) => {
    const cardArtist = cardUser.Artists.map((artist) => artist.artist);
    const cardGenres = usersGenres.map((genre) => (genre.user_id === cardUser.id ? genre.Genre.title : '')).filter((el) => el !== '');
    const cardAll = [...cardGenres, ...cardArtist]; // все артисты и жанры карточки для пары
    const userGenresTitle = userGenre.map((el) => el.Genre.title);
    const userArtists = user.Artists.map((artist) => artist.artist);
    const userAll = [...userGenresTitle, ...userArtists];

    let counter = 0;
    for (let i = 0; i <= userAll.length; i += 1) {
      if (cardAll.includes(userAll[i])) {
        counter += 1;
      }
    }

    const result = Math.round((counter / ((cardAll.length + userAll.length) / 2)) * 100);
    return result;
  };

  const outOfFrame = (name, idx, dir) => {
    if (dir === 'right') {
      dispatch(addLike({ user_id_take: user.id, user_id_get: name.id }));
      dispatch(findMatch({ card_id: name.id }));
    }
    console.log(`${name.username} (${name.id}) ${dir} the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />

      <div className="cardContainer">
        {db && db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.id}
            id={character.id}
            onSwipe={(dir) => swiped(dir, character.username, index)}
            onCardLeftScreen={(dir) => outOfFrame(character, index, dir)}
          >
            <div
              className="card"
              id={character.id}
            >
              <img src={character.avatar} alt="" className="card__photo" />
              <div className="card__genres">
                {usersGenres.map((genre) => (genre.user_id === character.id
                  ? <p key={genre.Genre.id} className="genres__button genres__card">{genre.Genre.title}</p>
                  : ''))}
              </div>
              <div className="card__desc">
                <h3 className="card__percent">
                  {character.username}
                  ,
                  {' '}
                  {differenceInYears(new Date(Date.now()), new Date(character.birth_date))}
                </h3>
                <p>{character.bio}</p>
                <p>{character.city}</p>
              </div>
              <div className="artists__list">
                {character.Artists.length > 0 && character.Artists.map((artist) => (
                  <div key={artist.id} className="artist__item">
                    <img src={`${artist.albumUrl}`} alt={artist.artist} className="card__artists" />
                  </div>
                ))}
                <p className="card__percent">
                  {' '}
                  {calculatePercentOfMatch(character)}
                  %
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className="genres__button-control button__card" onClick={() => swipe('left')} type="button">❌</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className="genres__button-control button__card" onClick={() => swipe('right')} type="button">💖</button>
      </div>
      {(match !== false && modal)
      && (
      <div className="modal modal__edit-bg">
        <div className="modal__content modal_edit modal__match">
          <h1 className="h1Main home__title">Yeah, like</h1>
          <div className="match">
            <div className="match__item">
              <img src={user.avatar} alt="" className="modal__img" />
              <p className="match__name">{user.username}</p>
            </div>
            {users.filter((el) => el.id === match.user_id_1).map((el) => (
              <div key={el.id} className="match__item">
                <img src={el.avatar} alt="" className="modal__img" />
                {' '}
                <p className="match__name">{el.username}</p>
              </div>
            ))}
          </div>
          <div className="buttons__match">
            <button type="button" onClick={() => setModal(!modal)} className="genres__button-control">
              Продолжить
            </button>
            <button onClick={() => navigate('/cabinet')} type="button" className="genres__button-control">
              Написать
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Tinder;
