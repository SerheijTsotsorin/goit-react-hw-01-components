import PropTypes from 'prop-types';
import { FriendListItem } from './FriendsListItem';
import styles from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};