import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NoPage() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="error_page">
      <h1 className="home__title">Упс, такой страницы нет</h1>
      {user
        ? (
          <>
            <p>Попробуй вернуться на главную</p>
            <button type="button" className="btnLogin btnEvents" onClick={() => navigate('/')}>На главную</button>
          </>
        )
        : (
          <p>Попробуй войти или зарегистрироваться</p>
        )}
    </div>

  );
}

export default NoPage;
