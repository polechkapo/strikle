import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserTracks } from '../store/artistsReducer/reducer';
import ChangeDashboard from './ChangeDashboard';
import SpotifyLogin from './SpotifyLogin';

function ChangeArtists() {
  const code = new URLSearchParams(window.location.search).get('code')

  const userTrack = useSelector((state) => state.tracks.userTracks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserTracks());
  }, [])
  console.log(userTrack, 'Это юзертрек');
  return (
    <div>
      <h3>Здесь можно изменить список твоих любимых артистов!</h3>
      <div style={{ display: 'flex' }}>
        {userTrack ? userTrack.map((track) =>
          <div key={track.id} style={{ margin: '20px' }}>
            <img src={track.albumUrl} alt="" />
            <p>{track.artist}</p>
          </div>) : <h3>Загрузка артистов</h3>}
      </div>
      {code ? <ChangeDashboard code={code} />
        : (
          <>
            <h3>Войди чтобы изменить</h3>
            <SpotifyLogin />
          </>
        )}
    </div>
  );
}

export default ChangeArtists;
