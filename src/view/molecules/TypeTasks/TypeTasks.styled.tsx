import styled from 'styled-components';
import type { TypeTaskWrapperProps } from './TypeTasksProps';

export const TypeTasks = styled.div`
  width: 150px;
  margin: 2px;
  display: inline-flex;
  justify-content: space-around;
  @media ${({ theme }) => theme.media.tablet} {
    width: 301px;
    justify-content: space-between;
  }
`;

export const TypeTaskWrapper = styled.div<TypeTaskWrapperProps>`
  border: ${({ active }) => (active ? '1px solid' : 'none')};
  border-color: ${({ theme }) => theme.colors.violet};
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
`;
