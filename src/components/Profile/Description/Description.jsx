import classNames from 'classnames';
import styles from './Description.module.css';
import PropTypes from 'prop-types';

export const Description = ({ avatar, username, tag, locations }) => {
  return (
    <div className={classNames(styles.description)}>
      <img
        src={avatar}
        alt="User avatar"
        className={classNames(styles.avatar)}
      />
      <p className={classNames(styles.name)}>{username}</p>
      <p className={classNames(styles.tag)}>{'@' + tag}</p>
      <p className={classNames(styles.location)}>{locations}</p>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
