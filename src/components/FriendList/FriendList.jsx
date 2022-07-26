import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
