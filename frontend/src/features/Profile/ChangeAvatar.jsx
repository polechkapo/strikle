/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';

function ChangeAvatar() {
  const user = useSelector((state) => state.user);

  const handlerUloadPhoto = async (e) => {
    console.log(e.target.files);
    try {
      const picturesData = [...e.target.files];
      const file = new FormData();
      picturesData.forEach((img) => {
        file.append('homesImg', img);
      });
      const response = await fetch('/api/multer/edit', {
        method: 'PUT',
        body: file,
      });
      const data = await response.json();
      console.log('ЧТО ТУТ');
      if (data.loadedPhoto) {
        window.location.href = '/cabinet';
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <label htmlFor="avatar">
        <div className="avatar">
          <img className="photoChAvatar" src={`${user.user.avatar}`} alt="avatar" />
          <form id="formAvatar" action="/multer" method="post">
            <input className="visually-hidden" id="multer" type="file" onChange={handlerUloadPhoto} />
            <label htmlFor="multer">
              {' '}
              <span>Добавить</span>
            </label>
          </form>
        </div>
      </label>
    </div>
  );
}

export default ChangeAvatar;
