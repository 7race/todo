import { P } from '@atoms/P';
import { CheckMark } from '@molecules/CheckMark';
import React from 'react';
import { useAppSelector } from '@redux/hooks';
import { usePrevious } from '@hooks/usePrevious';
import { Cross } from '@styles/animations';
import * as S from './TaskLine.styled';

type TaskLineProps = {
  children: React.ReactNode;
  isDone: boolean;
};

export const TaskLine = React.memo(({ children, isDone }: TaskLineProps) => {
  const { active } = useAppSelector((state) => state.Tasks);
  const prevIsDone = usePrevious(isDone);

  return isDone ? (
    <S.TaskLine>
      <CheckMark done={true} />
      {active === 'all' && prevIsDone !== undefined && !prevIsDone ? (
        <Cross>
          <P variant='done'>
            <span>{children}</span>
          </P>
        </Cross>
      ) : (
        <P variant='done'>
          <span>{children}</span>
        </P>
      )}
    </S.TaskLine>
  ) : (
    <S.TaskLine>
      <CheckMark done={false} />
      <P variant='todo'>
        <span>{children}</span>
      </P>
    </S.TaskLine>
  );
});
