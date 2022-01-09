import PropTypes from 'prop-types';
import Discription from './Discription';
import Stats from './Stats';
import styles from './Profile.module.css';

export default function Profile({ items }) {
  return (
    <div className={styles.discription}>
      <Discription
        avatar={items.avatar}
        userName={items.username}
        tag={items.tag}
        location={items.location}
      />
      <Stats
        followers={items.stats.followers}
        views={items.stats.views}
        likes={items.stats.likes}
      />
    </div>
  );
}

Profile.propTypes = {
  items: PropTypes.object,
};
