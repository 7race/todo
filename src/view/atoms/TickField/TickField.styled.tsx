import styled from 'styled-components';
import type { TickFieldProps } from './TickFieldProps';

export const TickField = styled.div<TickFieldProps>`
  width: 15px;
  height: 15px;
  border: 2px solid ${({ done, theme }) => (done ? theme.colors.green : theme.colors.black)};
  border-radius: 50%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 27px;
    height: 27px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
