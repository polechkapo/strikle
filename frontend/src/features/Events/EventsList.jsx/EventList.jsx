import React from 'react';
import { useSelector } from 'react-redux';

import EventsCard from '../EventsCard/EventsCard';

function EventList() {
  const { events } = useSelector((state) => state.events);
  return (
    <div>
      <h3>Список мероприятий:</h3>
      <div>
        {events && events.map((eventt) => <EventsCard event={eventt} key={eventt.id} />)}
      </div>
    </div>
  );
}

export default EventList;
