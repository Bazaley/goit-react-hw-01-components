import PropTypes from 'prop-types';
import { Item, Span, Image, Paragraph } from './FriendListItem.styled';
export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Span isOnline={isOnline}></Span>
            <Image src={avatar} alt="User avatar" width="48" />
            <Paragraph>{name}</Paragraph>
          </Item>
        );
      })}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
