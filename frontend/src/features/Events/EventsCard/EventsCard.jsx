/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventsCard({ event }) {
  const navigate = useNavigate();
  return (
    <div key={event.id}>
      <h4>{event.title}</h4>
      <img src={event.photo} alt={event.title} style={{ width: '300px' }} />
      <p>{event.description}</p>
      <p>{event.date}</p>
      <button type="button" onClick={() => navigate(`/events/${event.id}`)}>Подробнее</button>
    </div>
  );
}

export default EventsCard;
