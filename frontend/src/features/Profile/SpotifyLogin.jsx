import React from 'react';
import { Container } from 'react-bootstrap';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=b931afb81c784c88b86e59762b471baa&response_type=code&redirect_uri=http://localhost:3000/cabinet';

export default function SpotifyLogin() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '20vh' }}
    >
      <a className="spoty__login" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
