/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventsCard({ event }) {
  const navigate = useNavigate();
  return (
    <div key={event.id} className="events__card">
      <h4 className="events__title">{event.title}</h4>
      <img src={event.photo} alt={event.title} style={{ width: '300px' }} />
      <p className="event__info">{event.description}</p>
      <p>
        Когда:
        {' '}
        {new Date(event.date).toLocaleString('ru-RU').substring(0, 17)}
      </p>
      <button type="button" onClick={() => navigate(`/events/${event.id}`)} className="btnLogin btnEvents">Подробнее</button>
    </div>
  );
}

export default EventsCard;
