import styled from 'styled-components';
import type { TickFieldProps } from './TickFieldProps';

export const TickField = styled.div<TickFieldProps>`
  width: 30px;
  height: 30px;
  border: 2px solid ${({ done, theme }) => (done ? theme.colors.green : theme.colors.black)};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
