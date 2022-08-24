/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../../store/eventsReducer/reducer';

function CommentsForm() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCommentForm = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    dispatch(addComment({ event_id: Number(event.target.id), user_id: user.id, comment }));
  };
  return (
    <div>
      <form onSubmit={handleCommentForm} id={id} className="comments_form">
        <textarea name="comment" id={user.id} cols="30" rows="10" placeholder="Оставь комментарий здесь" className="textareaProfile" />
        <button type="submit" className="btnLogin">Добавить</button>
      </form>
    </div>
  );
}

export default CommentsForm;
