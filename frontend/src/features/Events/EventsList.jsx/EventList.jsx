import React from 'react';
import { useSelector } from 'react-redux';

import EventsCard from '../EventsCard/EventsCard';

function EventList() {
  const { events } = useSelector((state) => state.events);
  return (
    <div className="events__wrapper">
      <div className="events__titles">
        <h1 className="h1Reg2 home__title title__events">Найди с кем куда-нибудь пойти!</h1>
        <p className="events__subtitle">Здесь ты найдешь список мероприятий, на которых можно найти единомышленников</p>
      </div>
      <div className="cards__wrapper">
        {events && events.map((eventt) => <EventsCard event={eventt} key={eventt.id} />)}
      </div>
    </div>
  );
}

export default EventList;
