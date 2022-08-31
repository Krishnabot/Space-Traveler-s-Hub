/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import styles from './Missions.module.css';

const Missions = () => (
  <>
    <td className={styles.mission_name}> Static Mission Name</td>
    <td className={styles.mission_desc}>Static Description</td>
    <td className={styles.member_status}>
      <span>Active Member</span>
      <span>Not a Member</span>
    </td>
    <td className={styles.mission_status}>
      <span>Leave Mission</span>
      <span>Join Mission</span>
    </td>
  </>
);

export default Missions;
