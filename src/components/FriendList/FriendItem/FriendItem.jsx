import classNames from 'classnames';
import styles from './FriendItem.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={classNames(styles.item)}>
      <span
        className={classNames(styles.status, isOnline && styles.online)}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
