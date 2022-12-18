import classNames from 'classnames';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  locations,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={classNames(styles.profile)}>
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

      <ul className={classNames(styles.stats)}>
        <li className={classNames(styles.item)}>
          <span className={classNames(styles.label)}>Followers</span>
          <span className={classNames(styles.quantity)}>{followers}</span>
        </li>
        <li className={classNames(styles.item)}>
          <span className={classNames(styles.label)}>Views</span>
          <span className={classNames(styles.quantity)}>{views}</span>
        </li>
        <li className={classNames(styles.item)}>
          <span className={classNames(styles.label)}>Likes</span>
          <span className={classNames(styles.quantity)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
