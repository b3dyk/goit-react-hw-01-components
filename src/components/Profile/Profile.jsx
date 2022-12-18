import classNames from 'classnames';
import styles from './Profile.module.css';

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
