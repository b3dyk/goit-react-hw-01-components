import classNames from 'classnames';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

import { FriendItem } from './FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={classNames(styles.friendList)}>
      {friends.map(friend => {
        return <FriendItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
