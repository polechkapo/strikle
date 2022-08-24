/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { editEvent } from '../../store/eventsReducer/reducer';

function EditEventModal({ event, setEditModal }) {
  const [photo, setPhoto] = useState(event.photo);
  const dispatch = useDispatch();

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

  const handleEditForm = (e) => {
    e.preventDefault();
    const data = {
      date: e.target.date?.value,
      title: e.target.title?.value,
      description: e.target.description?.value,
      photo,
      id: e.target.id,
    };
    console.log(data);
    dispatch(editEvent(data));
    setEditModal(false);
  };

  return (
    <div className="modal modal__edit-bg">
      <div className="modal__content modal_edit ">
        <h1 className="h1Reg2 my__events home__title" id="h1Main">Отредактируй свой ивент</h1>
        <div className="avatar create__avatar">
          {
              photo && <img className="photo" src={photo} alt="avatar" style={{ width: 100 }} />
            }
          <form action="/multer" method="post">
            <label htmlFor="file">
              <input type="file" onChange={handlerUloadPhoto} name="file" id="file" multiple />
            </label>
          </form>
        </div>
        <form className="inputs_reg event__inputs" onSubmit={handleEditForm} id={event.id}>
          <label htmlFor="date" className="date__label">
            Укажи дату мероприятия:
            <input
              className="inputProfile event__input"
              type="datetime-local"
              id="date"
              name="date"
              min={moment().format('YYYY-MM-DD HH:mm')}
              max="2024-01-01"
              defaultValue={event.date}
            />
            Сейчас:
            {'  '}
            {new Date(event.date).toLocaleString('ru-RU').substring(0, 17)}
          </label>
          <input className="inputProfile event__input" type="text" id="title" name="title" defaultValue={event.title} />
          <textarea className="textareaProfile event__input" name="description" id="description" cols="30" rows="10" defaultValue={event.description} />
          <div className="btnContainer">
            <button className="btnLogin btnEvents" type="submit">Готово</button>
            <div><button className="btnLogin btnEvents" type="button" onClick={() => setEditModal(false)}>Назад</button></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventModal;
