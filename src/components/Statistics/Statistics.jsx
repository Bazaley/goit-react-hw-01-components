import PropTypes from 'prop-types';
import { List, Item, Span } from './Statistics.styled';
function randomColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}
export const Statistics = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => {
        return (
          <Item key={id} style={{ backgroundColor: randomColor() }}>
            <Span>{label}</Span>
            <Span percentage>{percentage}%</Span>
          </Item>
        );
      })}
    </List>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
