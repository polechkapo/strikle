import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../store/eventsReducer/reducer';

function CreateEvent() {
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

  const handleCreateForm = (event) => {
    event.preventDefault();
    const data = {
      date: event.target.date?.value,
      title: event.target.title?.value,
      description: event.target.description?.value,
      photo,
    };

    dispatch(createEvent(data));
    navigate('/events');
  };

  return (
    <>
      <h1 className="h1Reg2" id="h1Main">Coздай свой ивент</h1>
      <div className="events__wrapper create__wrapper">
        <div className="avatar create__avatar">
          {photo && <img className="photo" src={photo} alt="avatar" style={{ width: 300, borderRadius: 0 }} />}
          <form id="formAvatar" action="/multer" method="post">
            <label htmlFor="file">
              <input type="file" className="visually-hidden" onChange={handlerUloadPhoto} name="file" id="file" multiple />
              <span>Добавить фото</span>
            </label>
          </form>
        </div>
        <form className="inputs_reg event__inputs" onSubmit={handleCreateForm}>
          <label htmlFor="date" className="date__label">
            Укажи дату мероприятия:
            <input
              className="inputProfile event__input"
              type="datetime-local"
              id="date"
              name="date"
              min={moment().format('YYYY-MM-DD HH:mm')}
              max="2024-01-01"
              defaultValue={moment().format('YYYY-MM-DD HH:mm')}
            />
          </label>
          <input className="inputProfile event__input" type="text" id="title" name="title" placeholder="Напиши название ивента" />
          <textarea className="textareaProfile event__input" name="description" id="description" cols="30" rows="10" placeholder="Напиши подробности о своем ивенте" />
          <div className="btnContainer">
            <button className="btnLogin btnEvents" type="submit">Готово</button>
            <div><button className="btnLogin btnEvents" type="button" onClick={() => navigate('/events')}>Назад</button></div>
          </div>
        </form>
      </div>

    </>
  );
}

export default CreateEvent;
