/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';
import ChangeAvatar from './ChangeAvatar';
import ChangeInfo from './ChangeInfo';
import ChangeGenres from './ChangeGenres';
import ChangePassword from './ChangePassword';
import ChangeArtists from './ChangeArtists';

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Личный кабинет</h1>
      {user
        ? (
          <>
            <ChangeInfo />
            <ChangePassword />
            <ChangeAvatar />
            <ChangeGenres />
            <ChangeArtists />
          </>
        )
        : <div>Loading</div>}
    </div>
  );
}

export default Profile;
