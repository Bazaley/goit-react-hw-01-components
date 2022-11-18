import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

export const FriendsList = ({ children }) => {
  return <List>{children}</List>;
};

FriendsList.propTypes = {
  children: PropTypes.element.isRequired,
};
