import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Profile.module.css';

const Profile = (props) => {
  const { name } = props;
  return (
    <div className={styles.profilewrap}>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
}.isRequired;
