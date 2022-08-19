/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

function getSavedValue(key, defaultValue) { // эта функция забирает сущность из локал сторадж
  const savedValue = localStorage.getItem(key);
  return savedValue || defaultValue;
}
export function useLocalStorage(key, initalValue) { // это хук кастомный
  const [value, setValue] = useState(getSavedValue(key, initalValue));
  useEffect(() => {
    localStorage.setItem(key, value);

    return () => {
      localStorage.clear(); // при нажатии на кнопку инпут размонтируется
      // и уже монтируется при клике с пустым инпутом
    };
  }, [key, value]);
  return [value, setValue];
}
