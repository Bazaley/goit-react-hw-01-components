import PropTypes from 'prop-types';
import { Table, Thead, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ children }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      {children}
    </Table>
  );
};

TransactionHistory.propTypes = {
  children: PropTypes.element.isRequired,
};
