/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../store/userReducer/reducer';
import './Nav.css';

function Nav() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDestroy = () => {
    dispatch(deleteUser());
    navigate('/');
  };

  return (
    <>
      {user.user && (
        <div className="divNav">
          <Link to="/tinder">Tinder</Link>
          <Link to="/">Home</Link>
          <Link to="/cabinet">Cab</Link>
          <button className="btnNav" type="button" onClick={handleDestroy}>Выйти</button>
        </div>
      )}
    </>
  );
}

export default Nav;
