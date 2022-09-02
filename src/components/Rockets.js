import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './RocketCards.module.css';
import { joinRockets } from '../redux/Rockets/Rockets';

const Rockets = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  const clickHandeler = (event) => {
    dispatch(joinRockets({ id: event.target.id }));
  };
  return (
    <>
      <div className={styles.flikr_images}><img  alt="Rocket Image"  src={src} /></div>
      <div className={styles.rocket_name}>{rocket.rocket_name}</div>
      <div className={styles.rocket_desc}>
        {rocket.description}
        {rocket.more}
      </div>
      <td className={styles.rocket_status}>
        {!rocket.status && (
        <button
          type="button"
          className="join"
          onClick={clickHandeler}
          id={rocket.id}
        >
          Reserve Rocket
        </button>
        )}
        {rocket.status && (
        <button
          type="button"
          className="leave"
          onClick={clickHandeler}
          id={rocket.id}
        >
          Cancel Reservation
        </button>
        )}
      </td>
    </>
  );
};

Rockets.propTypes = {
    src: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.bool,
    id: PropTypes.string,
    more: PropTypes.string,
};

Rockets.defaultProps = {
  rocket_name: 'default',
  description: 'Non',
  src: 'no-img',
  status: false,
  id: '0',
};

export default Rockets;
