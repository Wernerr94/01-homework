import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.true}>On-line</span>
      ) : (
        <span className={css.false}>Offline</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <span className={css.name}>{name}</span>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
