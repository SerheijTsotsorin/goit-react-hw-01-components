import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Discription = ({ avatar, userName, tag, location }) => {
  return (
    <>
      <img src={avatar} alt={userName} className={styles.avatar} />
      <p className={styles.name}>{userName} </p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.tag}>{location}</p>
    </>
  );
};

Discription.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Discription;
