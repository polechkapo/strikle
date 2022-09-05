import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';
import { codeLoad } from '../store/userReducer/reducer';
import './SearchSpoty.css';

function SearchSpoty() {
  const dispatch = useDispatch();
  const { userCode } = useSelector((state) => state.user);
  const code = new URLSearchParams(window.location.search).get('code');
  if (code) {
    dispatch(codeLoad(code));
  }
  return (
    <div className="container__wrapper">

      <h1 id="h1Main" className="spoty__title">Выбери любимые песни:</h1>
      <p className="ganresP">Тебе нужно выбрать 5 любимых песен</p>

      {
        userCode ? <Dashboard code={userCode} />
          : (
            <div className="genres__content spoty__content">
              <p>Для начала войди в свой аккаунт</p>
              <LoginSpotify />
            </div>
          )
      }
    </div>
  );
}

export default SearchSpoty;
