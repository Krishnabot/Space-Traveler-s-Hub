import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import styles from "./ProfileContainer.module.css";

const ProfileContainer = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.status === true);

  return (
    <div className={styles.container_wrap}>
      <div className={styles.misions}>
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
            <Profile key={mission.mission_id} name={mission.mission_name} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
