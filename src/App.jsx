import { useState } from 'react';
import weatherData from './weather.json';
import CityInput from './CityInput';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';
import styles from './App.module.css';

function App() {
  const [city, setCity] = useState(null);

  const weather = city ? weatherData[city] : null;

  return (
    <div className={styles.app}>
      <h1>Погода</h1>
      <CityInput onSearch={setCity} />
      {city && weather && <WeatherCard city={city} weather={weather} />}
      {city && !weather && <ErrorMessage city={city} />}
    </div>
  );
}

export default App;