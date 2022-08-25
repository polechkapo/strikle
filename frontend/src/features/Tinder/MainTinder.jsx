import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loadUsersGenres } from '../store/genresReducer/reducer';
import { loadLikes } from '../store/tinderReducer/reducer';
// import { loadUsers } from '../store/userReducer/reducer';
import Tinder from './Tinder';

function MainTinder() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);

  useEffect(() => {
    dispatch(loadLikes());
  }, []);
  console.log('MAIN TINDER');
  const db = useSelector((state) => state.user.users);
  return (
    <div>
      {db ? <Tinder /> : <div>Подождите</div>}
    </div>
  );
}

export default MainTinder;
