import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './RocketCards.module.css';
import Rockets from './Rockets';
import fetchRockets from '../redux/ConsumeAPI/FetchRocket';

const RocketCards = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <div className={styles.cards}>
      <div>
        {rockets.map((rocket) => (
          <div className="rocket-item" key={rocket.id}>
            <Rockets
              id={rocket.id}
              rocket_name={rocket.rocket_name}
              src={rocket.flikr_images}
              description={rocket.description}
              value={rocket.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RocketCards;
