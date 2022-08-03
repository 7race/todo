import { P } from '@atoms/P';
import * as S from './TypeTasks.styled';
import { TypeTaskProps } from './TypeTasksProps';

export const TypeTasks = ({ active }: TypeTaskProps) => (
  <S.TypeTasks>
    <S.TypeTaskWrapper active={active === 'all'}>
      <P variant='subText'>All</P>
    </S.TypeTaskWrapper>
    <S.TypeTaskWrapper active={active === 'todo'}>
      <P variant='subText'>Active</P>
    </S.TypeTaskWrapper>
    <S.TypeTaskWrapper active={active === 'done'}>
      <P variant='subText'>Completed</P>
    </S.TypeTaskWrapper>
  </S.TypeTasks>
);
