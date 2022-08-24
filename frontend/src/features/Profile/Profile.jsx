/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';
import ChangeAvatar from './ChangeAvatar';
import ChangeInfo from './ChangeInfo';
import ChangeGenres from './ChangeGenres';
import ChangePassword from './ChangePassword';
import ChangeArtists from './ChangeArtists';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="divProfile">
      <h1 className="h1Profile" id="h1ProfileLk">Личный кабинет</h1>
      {user
        ? (
          <div className="container1">
            <div className="container2">
              <ChangeInfo />
              <ChangePassword />
              <ChangeGenres />
              <ChangeArtists />
            </div>
            <div>
              <ChangeAvatar />
            </div>
          </div>
        )
        : <div>Loading</div>}
    </div>
  );
}

export default Profile;
