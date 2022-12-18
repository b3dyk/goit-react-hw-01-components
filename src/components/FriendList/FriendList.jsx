import classNames from 'classnames';
import styles from './FriendList.module.css';

import { FriendItem } from './FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={classNames(styles.friendList)}>
      <FriendItem friends={friends} />
    </ul>
  );
};
