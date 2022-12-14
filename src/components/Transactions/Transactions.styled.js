import styled from 'styled-components';

export const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: #e3f4f5;
  }
`;

export const Td = styled.td`
  padding: 15px 0;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: capitalize;
  &:not(:last-child) {
    border-right: 1px solid #dad3d3;
  }
`;
