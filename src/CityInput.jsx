import { useState } from 'react';
import styles from './CityInput.module.css';

function CityInput({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city.trim());
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
      />
      <button className={styles.button}>Показать</button>
    </form>
  );
}

export default CityInput;