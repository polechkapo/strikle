/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { editTracks } from '../store/artistsReducer/reducer';
import useAuth from './useAuth';

const spotifyApi = new SpotifyWebApi({
  clientId: '1fe8ce94e340469aa031c4ac7d65107e',
});

export default function ChangeDashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const added = useSelector((state) => state.tracks.tracks);
  console.log('ERROR STAT', added);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

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

  const handleTrack = (event) => {
    const img = event.target.parentNode.childNodes[0].attributes[0].nodeValue;
    const title = event.target.parentNode.childNodes[1].innerText;
    const artist = event.target.parentNode.childNodes[2].innerText;
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
    dispatch(editTracks(tracksArr));
    window.location.href = '/cabinet';
  };

  return (
    <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
        <button type="button" onClick={handleButtons}>Изменить</button>
        {searchResults.map((track) => (
          <div key={track.uri}>
            <img src={track.albumUrl} alt="" />
            <p>{track.title}</p>
            <p>{track.artist}</p>
            <button type="button" onClick={handleTrack} id={track.uri}>💖</button>
          </div>
        ))}
      </div>
    </Container>
  );
}
