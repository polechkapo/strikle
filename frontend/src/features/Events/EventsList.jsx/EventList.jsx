import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import EventsCard from '../EventsCard/EventsCard';

function EventList() {
  const navigate = useNavigate();
  const { events } = useSelector((state) => state.events);
  return (
    <div className="events__wrapper">
      <div className="events__titles">
        <h1 className="h1Reg2 home__title title__events">Найди с кем куда-нибудь пойти!</h1>
        <p className="events__subtitle">Здесь ты найдешь список мероприятий, на которых можно найти единомышленников</p>
        <div className="buttons__control">
          <button type="button" className="genres__button-control">Мои ивенты</button>
          <button type="submit" className="genres__button-control" onClick={() => navigate('/events/new')}>Создать ивент</button>
        </div>
      </div>
      <div className="cards__wrapper">
        {events && events.map((eventt) => <EventsCard event={eventt} key={eventt.id} />)}
      </div>
    </div>
  );
}

export default EventList;
