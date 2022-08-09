import styled from 'styled-components';

export const ToDo = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  padding: 7px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const TasksList = styled.div`
  height: 370px;
  overflow: scroll;
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ClearBtn = styled.button`
  cursor: pointer;
  padding: 5px;
  outline: none;
`;
