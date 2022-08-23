/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../store/userReducer/reducer';
import './Nav.css';
import logo from './logo.png';

function Nav() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDestroy = () => {
    dispatch(deleteUser());
    navigate('/');
  };

  return (
    <div className="nav__wrapper">
      <div>
        <img src={logo} alt="Spikle" className="nav__logo" />
      </div>
      {user.user && (
      <div className="divNav">
        <Link to="/tinder" className="nav__link">Тиндер</Link>
        <Link to="/" className="nav__link">Главная</Link>
        <Link to="/cabinet" className="nav__link">Аккаунт</Link>
        <Link to="/events" className="nav__link">Ивенты</Link>
        <button className="btnNav" type="button" onClick={handleDestroy}>Выйти</button>
      </div>
      )}
    </div>
  );
}

export default Nav;
