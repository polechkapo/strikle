/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';

function ChangeAvatar() {
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  console.log(user, 'profile user');

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
      await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Изменение фотографии профиля</h1>
      <label htmlFor="avatar">
        <div className="avatar">
          <img className="photo" src={`${user.user.avatar}`} alt="avatar" style={{ width: 100 }} />
        </div>
        <form action="/multer" method="post">
          <input type="file" onChange={handlerUloadPhoto} />
        </form>
      </label>
    </div>
  );
}

export default ChangeAvatar;
