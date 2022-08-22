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
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import { initUserGenre, loadGenres, loadUsersGenres } from '../store/genresReducer/reducer';
import { addLike, findMatch, loadLikes } from '../store/tinderReducer/reducer';
import './Tinder.css';

function Tinder() {
  const dbStart = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user.user);
  const usersGenres = useSelector((state) => state.genres.usersGenres);
  const userGenre = useSelector((state) => state.genres.userGenre);
  const likes = useSelector((state) => state.likes.likes);
  const match = useSelector((state) => state.likes.match);
  const likesCards = likes.map((el) => el.user_id_get);
  const db = dbStart.filter((el) => !likesCards.includes(el.id));
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLikes());
    dispatch(loadUsersGenres());
    dispatch(loadGenres());
    dispatch(initUserGenre());
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
    // used for outOfFrame closure

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  // const goBack = async () => {
  //   if (!canGoBack) return;
  //   const newIndex = currentIndex + 1;
  //   updateCurrentIndex(newIndex);
  //   await childRefs[newIndex].current.restoreCard();
  // };

  // const handleLike = (event) => {
  //   swipe('right');
  //   // const user = event.target.parentNode;
  // };

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
    // handle the case in which go back is pressed before card goes outOfFrame
    if (dir === 'right') {
      dispatch(addLike({ user_id_take: user.id, user_id_get: name.id }));
      dispatch(findMatch({ card_id: name.id }));
    }
    console.log(`${name.username} (${name.id}) ${dir} the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
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
              // style={{ backgroundImage: `url(${character.avatar})` }}
              className="card"
              id={character.id}
            >
              <div className="wrapper__profile">
                <img src={character.avatar} alt="" className="card__photo" />
                <div className="artists__list">
                  {character.Artists.length > 0 && character.Artists.map((artist) => (
                    <div key={artist.id} className="artist__item">
                      <img src={`${artist.albumUrl}`} alt={artist.artist} />
                    </div>
                  ))}
                </div>
                <div>
                  {usersGenres.map((genre) => (genre.user_id === character.id
                    ? <p key={genre.Genre.id}>{genre.Genre.title}</p>
                    : ''))}
                </div>
              </div>
              <h3>
                {character.username}
                ,
                {' '}
                {differenceInYears(new Date(Date.now()), new Date(character.birth_date))}
              </h3>
              <p>{character.bio}</p>
              <p>{character.city}</p>
              <p>
                Cовпадение:
                {' '}
                {calculatePercentOfMatch(character)}
                %
              </p>
            </div>

          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')} type="button">❌</button>
        {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()} type="button">Undo swipe!</button> */}
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')} type="button">💖</button>
      </div>
      {/* {lastDirection ? (
        ''
      ) : (
        <h2 className="infoText">
          Упс, на этом пока все!
        </h2>
      )} */}
      {(match !== false && modal)
      && (
      <div className="modal">
        <div className="modal__content">
          Это мэтч!
          <div>
            <img src={user.avatar} alt="" className="modal__img" />
            <p>{user.username}</p>
            и
            {dbStart.filter((el) => el.id === match.user_id_1).map((el) => (
              <div key={el.id}>
                <img src={el.avatar} alt="" className="modal__img" />
                {' '}
                <p>{el.username}</p>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button type="button" onClick={() => setModal(!modal)}>
              Продолжить
            </button>
            <button onClick={() => navigate('/cabinet')} type="button">
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
