import React from 'react';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';

const code = new URLSearchParams(window.location.search).get('code');

function SearchSpoty() {
  return (
    code ? <Dashboard code={code} /> : <LoginSpotify />
  );
}

export default SearchSpoty;
