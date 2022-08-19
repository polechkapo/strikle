import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../store/userReducer/reducer';

function Registration2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    const gender = event.target.gender.value;
    const birthdate = event.target.birth.value;
    const city = event.target.city.value;
    const bio = event.target.bio.value;
    dispatch(updateUser({
      gender, birthdate, city, bio,
    }));
    navigate('/registraton/3');
  };
  return (
    <>
      <h1>Расскажи о себе</h1>
      <form className="inputs_reg" onSubmit={handleForm}>
        <select name="gender">
          <option disabled>Какого ты пола?</option>
          <option value="Ж">Ж</option>
          <option value="М">М</option>
        </select>
        <label htmlFor="birth">
          Когда твой день рождения?
          <input
            type="date"
            id="birth"
            name="birth"
            min="1950-01-01"
            max="2004-01-01"
          />
        </label>
        <input type="text" id="city" name="city" placeholder="Из какого ты города?" />
        <textarea name="bio" id="bio" cols="30" rows="10" placeholder="Расскажи о себе и о том, кого бы ты хотел  найти на Стракйл" />
        <button type="submit">Cледующий шаг</button>
        <button type="button" onClick={() => navigate('/')}>Пропустить</button>
      </form>

    </>
  );
}

export default Registration2;
