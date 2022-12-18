import classNames from 'classnames';
import styles from './FriendItem.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={classNames(styles.item)} key={id}>
            <span
              className={classNames(styles.status, isOnline && styles.online)}
            ></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </li>
        );
      })}
    </>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
