import { P } from '@atoms/P';
import { TypeTasks } from '@molecules/TypeTasks';
import { BottomLineProps } from './BottomLineProps';
import * as S from './BottomLine.styled';

export const BottomLine = ({ todoCount, clearDoneTasks }: BottomLineProps) => (
  <S.BottomLine>
    <P variant='subText'>{todoCount} items</P>
    <TypeTasks />
    <S.ClearWrapper>
      <P variant='subText' onClick={clearDoneTasks}>
        Clear completed
      </P>
    </S.ClearWrapper>
  </S.BottomLine>
);
