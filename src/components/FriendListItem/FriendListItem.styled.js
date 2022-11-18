import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 400px;
  height: 100px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 3px 2px 6px -2px #4d4949;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${isOnline => (isOnline.isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #aeebeb;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
