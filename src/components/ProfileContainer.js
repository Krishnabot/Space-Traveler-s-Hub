import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import styles from './ProfileContainer.module.css';

const ProfileContainer = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.status === true);
  const rockets = useSelector((state) => state.rockets);
  const joinedRockets = rockets.filter((rocket) => rocket.result === true);

  return (
    <div className={styles.container_wrap}>
      <div className={styles.missions}>
        <h2>My Missions</h2>
        {joinedMissions.length === 0 ? (
          <>
            <div className={styles.no_mission}>
              <span>No missions joined Yet! </span>
            </div>
            <Link to="/Missions">
              <button type="button" className={styles.join_mission}>
                Would You Like to join one?
              </button>
            </Link>
          </>
        ) : (
          joinedMissions.map((mission) => (
            <div className={styles.missionNames} key={mission.mission_id}>
              <Profile key={mission.mission_id} name={mission.mission_name} />
            </div>
          ))
        )}
      </div>
      <div className={styles.rockets}>
        <h2>Rockets</h2>
        {joinedRockets.length === 0 ? (
          <>
            <div className={styles.no_rocket}>
              <span>No Rocket Reserved Yet! </span>
            </div>
            <Link to="/Rockets">
              <button type="button" className={styles.join_rocket}>
                Would You Like to Reserve One?
              </button>
            </Link>
          </>
        ) : (
          joinedRockets.map((rocket) => (
            <div className={styles.rocketNames} key={rocket.rocket_id}>
              <Profile key={rocket.id} name={rocket.rocket_name} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
