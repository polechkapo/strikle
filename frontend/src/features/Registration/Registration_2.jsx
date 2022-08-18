import React from 'react';
import { useNavigate } from 'react-router-dom';

function Registration2() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Расскажи о себе</h1>
      <form className="inputs_reg">
        <select>
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
        <button type="submit" onClick={() => navigate('/registraton/3')}>Cледующий шаг</button>
        <button type="submit" onClick={() => navigate('/')}>Пропустить</button>
      </form>

    </>
  );
}

export default Registration2;
