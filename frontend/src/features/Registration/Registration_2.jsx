import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../store/userReducer/reducer';
import empty from '../Multer/empty.jpeg';
import './registration_2/registration_2.css';

function Registration2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(null);

  const handlerUloadPhoto = React.useCallback(async (e) => {
    console.log(e.target.files);
    try {
      const picturesData = [...e.target.files];
      const file = new FormData();
      picturesData.forEach((img) => {
        file.append('homesImg', img);
      });
      const response = await fetch('/api/multer', {
        method: 'POST',
        body: file,
      });
      const test = await response.json();
      setPhoto(test);
    } catch (error) {
      console.log(error.message);
    }
  });

  const handleForm = (event) => {
    event.preventDefault();
    const gender = event.target.gender.value;
    const birthdate = event.target.birth.value;
    const city = event.target.city.value;
    const bio = event.target.bio.value;
    const avatar = photo;
    console.log(avatar, 'form');
    dispatch(updateUser({
      gender, birthdate, city, bio, avatar,
    }));
    navigate('/');
  };

  return (
    <>
      <h1 className="h1Reg2" id="h1Main">Расскажи о себе:</h1>

      <form className="inputs_reg" onSubmit={handleForm}>
        <div id="container1">
          <label htmlFor="avatar">
            <div className="avatar">
              {
              photo
                ? <img className="photo" src={photo} alt="avatar" style={{ width: 100 }} />
                : <img className="photo" src={`${empty}`} alt="avatar" />
            }
            </div>
            <form action="/multer" method="post">
              <input type="file" onChange={handlerUloadPhoto} />
            </form>
          </label>
        </div>
        <div id="container2" />
        <div id="container3">
          <select className="inputProfile" name="gender">
            <option disabled>Какого ты пола?</option>
            <option value="Ж">Ж</option>
            <option value="М">М</option>
          </select>
          <label htmlFor="birth">
            <input
              placeholder="Когда твой день рождения?"
              className="inputProfile"
              type="date"
              id="birth"
              name="birth"
              min="1950-01-01"
              max="2004-01-01"
            />
          </label>
          <input className="inputProfile" type="text" id="city" name="city" placeholder="Из какого ты города?" />
          <textarea className="textareaProfile" name="bio" id="bio" cols="30" rows="10" placeholder="Расскажи о себе и о том, кого бы ты хотел  найти на Страйкл" />
        </div>
      </form>
      <div className="btnContainer">
        <div><button className="btnProfile" type="submit">Готово</button></div>
        <div><button className="btnProfile" type="button" onClick={() => navigate('/')}>Пропустить</button></div>
      </div>
    </>
  );
}

export default Registration2;
