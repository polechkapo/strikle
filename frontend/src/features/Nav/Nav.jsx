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
    window.location.href = '/';
  };

  return (
    <div className="nav__wrapper">
      <div>
        <Link to="/"><img src={logo} alt="Spikle" className="nav__logo" /></Link>
      </div>
      {user.user ? (
        <div className="divNav">
          <Link to="/tinder" className="nav__link">Тиндер</Link>
          <Link to="/" className="nav__link">Главная</Link>
          <Link to="/chat" className="nav__link">Чат</Link>
          <Link to="/cabinet" className="nav__link">Аккаунт</Link>
          <Link to="/events" className="nav__link">Ивенты</Link>
          <button className="btnNav" type="button" onClick={handleDestroy}>Выйти</button>
        </div>
      )
        : (
          <div className="divNav">
            <div className="btn2">
              <button className="btnMain btnReg" id="btnMain2" type="button" onClick={() => navigate('/registraton')}>Зарегистрироваться</button>
            </div>
            <div className="btn2">
              <button className="btnMain" id="btnMain2" type="button" onClick={() => navigate('/login')}>Войти</button>
            </div>

          </div>
        )}
    </div>
  );
}

export default Nav;
