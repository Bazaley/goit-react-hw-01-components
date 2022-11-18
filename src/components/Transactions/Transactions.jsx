import PropTypes from 'prop-types';
import { Tr, Td } from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        );
      })}
    </tbody>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
