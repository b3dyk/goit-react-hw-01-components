import classNames from 'classnames';
import styles from './Stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => {
  return (
    <ul className={classNames(styles.stats)}>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Followers</span>
        <span className={classNames(styles.quantity)}>{stats.followers}</span>
      </li>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Views</span>
        <span className={classNames(styles.quantity)}>{stats.views}</span>
      </li>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Likes</span>
        <span className={classNames(styles.quantity)}>{stats.likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
