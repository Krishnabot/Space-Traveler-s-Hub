import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Missions.module.css';
import { joinMissions } from '../redux/Missions/Missions';

const Missions = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const clickHandeler = (event) => {
    dispatch(joinMissions({ id: event.target.id }));
  };
  return (
    <>
      <td className={styles.mission_name}>{mission.mission_name}</td>
      <td className={styles.mission_desc}>
        {mission.description}
        {mission.description}
        <span>
          <a href={mission.more}>See more.</a>
        </span>
      </td>
      <td className={styles.member_status}>
        {!mission.status && <p className={styles.inactive}>NOT A MEMBER</p>}
        {mission.status && <p className={styles.active}>Active Member</p>}
      </td>
      <td className={styles.mission_status}>
        {!mission.status && (
          <button
            type="button"
            className={styles.join}
            onClick={clickHandeler}
            id={mission.mission_id}
          >
            Join Mission
          </button>
        )}
        {mission.status && (
          <button
            type="button"
            className={styles.leave}
            onClick={clickHandeler}
            id={mission.mission_id}
          >
            Leave Mission
          </button>
        )}
      </td>
    </>
  );
};

Missions.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.bool,
    mission_id: PropTypes.string,
    more: PropTypes.string,
  }).isRequired,
};

export default Missions;
