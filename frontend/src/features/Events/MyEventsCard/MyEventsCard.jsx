/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../store/eventsReducer/reducer';
import EditEventModal from '../EditEvent/EditEventModal';

function MyEventsCard({ event }) {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);

  const destroyCard = (e) => {
    const { id } = e.target;
    dispatch(deleteEvent({ id }));
  };
  return (
    <>
      {editModal && <EditEventModal event={event} setEditModal={setEditModal} />}
      <div key={event.id} className="events__card">
        <h4 className="events__title">{event.title}</h4>
        <img src={event.photo} alt={event.title} style={{ width: '300px' }} />
        <p>{event.description}</p>
        <p>
          Когда:
          {' '}
          {new Date(event.date).toLocaleString('ru-RU').substring(0, 17)}
        </p>
        <div className="buttons_control-my">
          <button type="button" className="btnLogin btnEvents" onClick={() => setEditModal(true)}>Отредактировать</button>
          <button type="button" className="btnLogin btnEvents" id={event.id} onClick={destroyCard}>Удалить</button>
        </div>
      </div>
    </>
  );
}

export default MyEventsCard;
