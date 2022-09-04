import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import styles from './styles/RocketCards.module.css';
import { joinRockets } from '../redux/Rockets/Rockets';

const Rockets = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  const clickHandeler = () => {
    dispatch(joinRockets({ rocket }));
  };
  return (
    <>
      <div className={styles.flikr_images}>
        <img alt={rocket.rocket_name} src={rocket.image} className={styles.images} />
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.rocket_name}>{rocket.rocket_name}</h2>
        <div className={styles.member_status}>
          {rocket.result && <p className={styles.active}>Reserved</p>}
        </div>
        <div className={styles.rocket_description}>
          <span className={styles.desc}>{rocket.description}</span>
        </div>
        <div className={styles.rocket_status}>
          {!rocket.result && (
            <button
              type="button"
              className={styles.join}
              onClick={clickHandeler}
            >
              <p className={styles.bText}>Reserve Rocket</p>
            </button>
          )}
          {rocket.result && (
            <button
              type="button"
              className={styles.leave}
              onClick={clickHandeler}
            >
              <p className={styles.bText2}>Cancel Reservation</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

Rockets.propTypes = {
  rocket: propTypes.shape({
    rocket_name: propTypes.string,
    description: propTypes.string,
    result: propTypes.bool,
    id: propTypes.string,
    image: propTypes.string,
  }).isRequired,
};

export default Rockets;
