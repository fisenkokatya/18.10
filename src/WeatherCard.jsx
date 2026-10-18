import styles from './WeatherCard.module.css';

function WeatherCard({ city, weather }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.city}>{city}</h2>
      <div className={styles.icon}>{weather.icon}</div>
      <p className={styles.temp}>{weather.temp}°C</p>
      <p className={styles.description}>{weather.description}</p>
    </div>
  );
}

export default WeatherCard;