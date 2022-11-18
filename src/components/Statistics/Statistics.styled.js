import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: calc(100% / 4);
  text-align: center;
  padding: 20px 0;
`;

export const Span = styled.span`
  display: block;
  font-size: ${props => (props.percentage ? '25px' : '16px')};
  color: white;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
