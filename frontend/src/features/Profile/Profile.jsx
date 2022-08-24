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
      <div className="imgsProfile" id="image1" />
      <div className="imgsProfile" id="image2" />
      <div className="imgsProfile" id="image3" />
      <div className="imgsProfile" id="image4" />
      <div className="imgsProfile" id="image5" />
      <div className="imgsProfile" id="image6" />
      <div className="imgsProfile" id="image7" />
      <h1 className="h1Profile" id="h1ProfileLk">Личный кабинет</h1>
      {user
        ? (
          <>
            <div className="container1">
              <div className="container2">
                <ChangeInfo />
                <ChangePassword />
              </div>
              <div className="container3">
                <ChangeAvatar />
              </div>
            </div>
            <div className="container4">
              <ChangeGenres />
              <ChangeArtists />
            </div>
          </>
        )
        : <div>Loading</div>}
    </div>
  );
}

export default Profile;
