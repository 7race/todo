import { P } from '@atoms/P';
import { TypeTasks } from '@molecules/TypeTasks';
import { BottomLineProps } from './BottomLineProps';
import * as S from './BottomLine.styled';

export const BottomLine = ({ todoCount, active }: BottomLineProps) => (
  <S.BottomLine>
    <P variant='subText'>{todoCount} items</P>
    <TypeTasks active={active} />
    <P variant='subText'>Clear completed</P>
  </S.BottomLine>
);
