import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function CreateEvent() {
  const navigate = useNavigate();
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
  return (
    <>
      <h1 className="h1Reg2" id="h1Main">Coздай свой ивент</h1>
      <form className="inputs_reg event__inputs">
        <div className="avatar">
          {photo && <img className="photo" src={photo} alt="avatar" style={{ width: 300, borderRadius: 0 }} />}
        </div>
        <form action="/multer" method="post">
          <label htmlFor="file">
            Выберите файл
            <input type="file" onChange={handlerUloadPhoto} name="file" id="file" multiple />
          </label>
        </form>
        <label htmlFor="birth" className="date__label">
          Укажи дату мероприятия:
          <input
            className="inputProfile event__input"
            type="datetime-local"
            id="birth"
            name="birth"
            min={moment().format('YYYY-MM-DD HH:mm')}
            max="2024-01-01"
            defaultValue={moment().format('YYYY-MM-DD HH:mm')}
          />
        </label>
        <input className="inputProfile event__input" type="text" id="city" name="city" placeholder="Напиши название ивента" />
        <textarea className="textareaProfile event__input" name="bio" id="bio" cols="30" rows="10" placeholder="Напиши подробности о своем ивенте" />
      </form>
      <div className="btnContainer">
        <div><button className="btnProfile" type="submit">Готово</button></div>
        <div><button className="btnProfile" type="button" onClick={() => navigate('/events')}>Назад</button></div>
      </div>
    </>
  );
}

export default CreateEvent;
