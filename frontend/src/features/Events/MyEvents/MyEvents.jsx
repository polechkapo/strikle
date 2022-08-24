import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyEventsCard from '../MyEventsCard/MyEventsCard';

function MyEvents() {
  const { user } = useSelector((state) => state.user);
  const { events } = useSelector((state) => state.events);
  const userEvents = events.filter((ev) => ev.user_id === user.id);
  const navigate = useNavigate();

  return (
    <div className="events__wrapper create__wrap">
      <h1 className="h1Reg2 home__title my__events">Отредактируй свои ивенты</h1>
      <button type="button" onClick={() => navigate('/events')} className="btnLogin btnEvents">Назад</button>
      <div className="cards__wrapper">
        {userEvents && userEvents.map((event) => (<MyEventsCard event={event} key={event.id} />))}
      </div>
    </div>
  );
}

export default MyEvents;
