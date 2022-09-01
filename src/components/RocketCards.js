import React from 'react';
import styles from './RocketCards.module.css';

const RocketCards = () => (
  <div className={styles.cards}>
    <div className={styles.card1}>
      <img href="#" alt="Static" />
      Placeholder Image
      <h2>Falcon1</h2>
      <p>Some dummy text as placeholder</p>
      <button type="submit">Reserve Rocket</button>
    </div>
    <div className={styles.card2}>
      <img href="#" alt="Static" />
      Placeholder Image
      <h2>Falcon9</h2>
      <p>Some dummy text as placeholder</p>
      <button type="submit">Cancel Reservation</button>
    </div>
  </div>
);

export default RocketCards;
