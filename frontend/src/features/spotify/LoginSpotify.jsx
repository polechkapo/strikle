import React from 'react';
import { Container } from 'react-bootstrap';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a64cff7f1f62470ab9902e118ab37e41&response_type=code&redirect_uri=http://localhost:3000/search';

export default function LoginSpotify() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
