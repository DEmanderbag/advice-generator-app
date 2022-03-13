/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/Card.module.scss";

const Card = ({ data, action }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardAdvice}>Advice #{data.id}</p>
      <div className={styles.messageWrapper}>
        <p className={styles.message}>{data.advice}</p>
        <img src="pattern-divider-mobile.svg" alt="" />
      </div>
      <button onClick={action} className={styles.btnFetch}>
        <span className="sr-only">Generate new advice</span>
        <img src="icon-dice.svg" alt="Icon of a dice showing number five" />
      </button>
    </div>
  );
};

export default Card;
