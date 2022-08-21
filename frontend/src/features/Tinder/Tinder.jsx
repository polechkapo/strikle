/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, {
  useState, useRef, useMemo, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import './Tinder.css';

function Tinder() {
  const db = useSelector((state) => state.user.users);

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

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <>
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
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.username, index)}
              onCardLeftScreen={() => outOfFrame(character.username, index)}
            >
              <div
                // style={{ backgroundImage: `url(${character.avatar})` }}
                className="card"
              >
                <img src={character.avatar} alt="" />
                <h3>{character.username}</h3>
                <p>{character.bio}</p>
                <p>{character.city}</p>
              </div>
              {character.Artists.length > 0 && character.Artists.map((artist) => (
                <div key={artist.id}>
                  <p>{artist.title}</p>
                  <img src={artist.albumUrl} alt={artist.title} />
                </div>
              )) }
            </TinderCard>
          ))}
        </div>
        <div className="buttons">
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')} type="button">❌</button>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()} type="button">Undo swipe!</button>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')} type="button">💖</button>
        </div>
        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You swiped
            {' '}
            {lastDirection}
          </h2>
        ) : (
          <h2 className="infoText">
            Swipe a card or press a button to get Restore Card button visible!
          </h2>
        )}
      </div>
      ;
    </>
  );
}

export default Tinder;
