import React from 'react';
import styles from './MissionsContainer.module.css';
import Missions from './Missions';

const MissionsContainer = () => (
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
        <tr className={styles.mission_items}>
          <Missions />
        </tr>
      </tbody>
    </table>
  </div>
);

export default MissionsContainer;
