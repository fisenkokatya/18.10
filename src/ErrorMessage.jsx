import styles from './ErrorMessage.module.css';

function ErrorMessage({ city }) {
  return <p className={styles.error}>Город «{city}» не найден</p>;
}

export default ErrorMessage;