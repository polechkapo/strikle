import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../store/userReducer/reducer';
import Tinder from './Tinder';

function MainTinder() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const db = useSelector((state) => state.user.users);
  return (
    <div>
      {db !== undefined ? <Tinder /> : <div>Подождите</div>}
    </div>
  );
}

export default MainTinder;
