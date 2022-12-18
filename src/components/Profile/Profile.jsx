import classNames from 'classnames';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';

export const Profile = ({ username, tag, locations, avatar, stats }) => {
  return (
    <div className={classNames(styles.profile)}>
      <Description
        username={username}
        tag={tag}
        locations={locations}
        avatar={avatar}
      />

      <Stats stats={stats} />
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
