/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
// import Player from "../Player"
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { addTracks } from '../store/artistsReducer/reducer';
import { loadUser } from '../store/userReducer/reducer';
// import axios from 'axios';
// import TrackSearchResult from './TrackSearchResult';
import useAuth from './useAuth';

const spotifyApi = new SpotifyWebApi({
  clientId: '1fe8ce94e340469aa031c4ac7d65107e',
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const added = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [playingTrack, setPlayingTrack] = useState();
  // const [lyrics, setLyrics] = useState('');

  // function chooseTrack(track) {
  //   setPlayingTrack(track);
  //   setSearch('');
  //   setLyrics('');
  // }

  // useEffect(() => {
  //   if (!playingTrack) return;

  //   axios
  //     .get('http://localhost:4000/artists', {
  //       params: {
  //         track: playingTrack.title,
  //         artist: playingTrack.artist,
  //       },
  //     })
  //     .then((res) => {
  //       setLyrics(res.data.lyrics);
  //     });
  // }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => () => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0],
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        }),
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  const [tracksArr, setTracksArr] = useState([]);

  // const tracksArr = [];

  const handleTrack = (event) => {
    const img = event.target.parentNode.childNodes[0].childNodes[0].childNodes[0].attributes[0].nodeValue;
    const title = event.target.parentNode.childNodes[0].childNodes[1].childNodes[0].innerText;
    const artist = event.target.parentNode.childNodes[0].childNodes[1].childNodes[1].innerText;
    const { id } = event.target;

    if (!tracksArr.some((el) => el.id === id)) {
      if (tracksArr.length < 5) {
        setTracksArr([...tracksArr, {
          id, img, title, artist,
        }]);
        event.target.innerText = '✅';
      }
    } else {
      setTracksArr(tracksArr.filter((el) => el.id !== id));
      event.target.innerText = '💖';
    }
  };

  const handleButtons = () => {
    dispatch(addTracks(tracksArr));
    navigate('/');
  };

  return (
    <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>
      {added.addedArtist === false && (
        <div style={{ backgroundColor: 'red' }}>
          <p>
            У вас уже загружен список артистов. Для редактирования перейдите в
            {' '}
            <a href="/cabinet">Личный кабинет</a>
          </p>
        </div>
      )}
      <Form.Control
        className="searchSpoty"
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
        <button type="button" onClick={handleButtons} className="btnProfile">Готово</button>
        <div className="trackListSearch">
          {searchResults.map((track) => (
            <div key={track.uri} className="track__card">
              <div className="card__titleTrack">
                <div>
                  <img src={track.albumUrl} alt="" />
                </div>
                <div>
                  <p>{track.title}</p>
                  <p>{track.artist}</p>
                </div>
              </div>
              <button type="button" onClick={handleTrack} id={track.uri} className="button_like">💖</button>
            </div>
          ))}
        </div>
        {/* {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )} */}
      </div>
      <div>
        {/* <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
      </div>
    </Container>
  );
}

// track={track}
// key={track.uri}
// chooseTrack={chooseTrack}
