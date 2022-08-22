/* eslint-disable no-param-reassign */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addParticipant } from '../../store/eventsReducer/reducer';
import CommentsForm from '../EventsCard/CommentsForm/CommentsForm';

function EventPage() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const { events, comments, participants } = useSelector((state) => state.events);
  const currentEvent = events.find((el) => el.id === +id);
  const eventComments = comments.filter((comment) => comment.event_id === Number(id));
  const currentParticipants = participants.filter((el) => el.event_id === Number(id));
  console.log(currentParticipants);
  const dispatch = useDispatch();

  const handleButton = (event) => {
    event.preventDefault();
    dispatch(addParticipant({ user_id: user.id, event_id: Number(event.target.id) }));
    event.target.disabled = true;
  };

  return (
    <div>
      <div>
        {currentEvent !== undefined
           && (
           <div key={currentEvent.id}>
             <h4>{currentEvent.title}</h4>
             <img src={currentEvent.photo} alt={currentEvent.title} style={{ width: '300px' }} />
             <p>{currentEvent.description}</p>
             <p>{currentEvent.date}</p>
             <div>
               <div>
                 <ul>Уже идут:</ul>
                 {currentParticipants && currentParticipants.map((el) => (
                   <li key={el.id}>
                     {el['User.username']}
                   </li>
                 ))}
               </div>
               <button type="button" onClick={handleButton} id={id}>Хочу присоединиться!</button>
               <Link to="/events">Назад</Link>
               {/* <button onClick={()=> navigate(-1)}>Back</button> */}
             </div>
           </div>
           )}
      </div>
      <div>
        {eventComments ? eventComments.map((comment) => (
          <div key={comment.id}>
            <p>
              {comment['User.username']}
              {' '}
              пишет:
            </p>
            <p>{comment.comment}</p>
          </div>
        ))
          : <div>Комментариев пока что нет</div>}
      </div>
      <CommentsForm />
    </div>
  );
}

export default EventPage;
