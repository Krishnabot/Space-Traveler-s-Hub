import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/MissionsContainer.module.css';
import Missions from './Missions';
import fetchMissions from '../redux/ConsumeAPI/FetchMission';

const MissionsContainer = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <div className={styles.table_wrap}>
      <table className={styles.table_head}>
        <thead>
          <tr>
            <th className={styles.title}>Mission</th>
            <th className={styles.description}>Description</th>
            <th className={styles.status}>Status</th>
            <th className={styles.missioncontroll}>Mission Controll</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            /* eslint-disable */
            <tr className="mission-item" key={mission.mission_id}>
              <Missions mission={mission} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsContainer;
