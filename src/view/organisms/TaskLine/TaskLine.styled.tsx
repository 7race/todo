import styled from 'styled-components';

export const TaskLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 12px;
`;
