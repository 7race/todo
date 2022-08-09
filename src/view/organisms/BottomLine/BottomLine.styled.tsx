import styled from 'styled-components';

export const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClearWrapper = styled.div`
  cursor: pointer;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    transition: background-color 0.4s;
  }
`;
