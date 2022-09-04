/* eslint-disable no-param-reassign */
import React from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=b931afb81c784c88b86e59762b471baa&response_type=code&redirect_uri=https://strikle1.herokuapp.com/search';

export default function LoginSpotify() {
  return (
    <a className="spoty__login" href={AUTH_URL}>
      Login With Spotify
    </a>
  );
}
