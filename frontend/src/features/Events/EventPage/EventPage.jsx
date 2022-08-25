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

  const dispatch = useDispatch();

  const handleButton = (event) => {
    event.preventDefault();
    dispatch(addParticipant({ user_id: user.id, event_id: Number(event.target.id) }));
    // event.target.disabled = true;
  };

  return (
    <div className="event__page events__card">
      {currentEvent !== undefined
        && (
          <>
            <h4 className="events__title">{currentEvent.title}</h4>
            <div key={currentEvent.id} className="events__card-content">
              <img src={currentEvent.photo} alt={currentEvent.title} style={{ width: '300px' }} />
              <div>
                <p>{currentEvent.description}</p>
                <p id="textEvent">{new Date(currentEvent.date).toLocaleString('ru-RU').substring(0, 17)}</p>
                <p>
                  Создал ивент:
                  {' '}
                  {currentEvent['User.username']}
                  {' '}
                </p>
                <div>
                  <div>
                    <div className="events__lists">
                      Уже идут:
                      {currentParticipants && currentParticipants.map((el) => (
                        <div key={el.id}>
                          {/* {el['User.username']} */}
                          <img src={el['User.avatar']} alt={el['User.username']} className="event_page-img" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* <button onClick={()=> navigate(-1)}>Back</button> */}
            </div>
            <div className="buttons__control">
              <button type="button" onClick={handleButton} id={id} className="btnLogin btnEvents">Я иду</button>
              <Link to="/events" className="btnLogin btnEvents btn-links">Назад</Link>
            </div>
          </>
        )}
      <div className="comments__wrapper">
        <h4 className="events__title">Комментарии:</h4>
        {eventComments ? eventComments.map((comment) => (
          <div key={comment.id} className="comments">
            <div className="comments2">
              <p>
                {comment['User.username']}
                {' :'}
                {/* пишет: */}
              </p>
              <p>
                <i className="textComments">
                  {' '}
                  {new Date(comment.createdAt).toLocaleString('ru-RU').substring(0, 17)}
                </i>
              </p>
            </div>
            <div className="comTextEvents">{comment.comment}</div>
          </div>
        ))
          : <div>Комментариев пока что нет</div>}
        <CommentsForm />
      </div>
    </div>
  );
}

export default EventPage;
