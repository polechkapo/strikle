/* eslint-disable no-param-reassign */
import React from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a64cff7f1f62470ab9902e118ab37e41&response_type=code&redirect_uri=https://strikle1.herokuapp.com/search';

export default function LoginSpotify() {
  return (
    <a className="spoty__login" href={AUTH_URL}>
      Login With Spotify
    </a>
  );
}
