import { P } from '@atoms/P';
import { CheckMark } from '@molecules/CheckMark';
import React, { useEffect } from 'react';
import { useAppSelector } from '@redux/hooks';
import { usePrevious } from '@hooks/usePrevious';
import { Cross } from '../../../styles/animations';
import * as S from './TaskLine.styled';

type TaskLineProps = {
  children: React.ReactNode;
  isDone: boolean;
};

export const TaskLine = React.memo(({ children, isDone }: TaskLineProps) => {
  const { active } = useAppSelector((state) => state.activeTasks);
  const prevIsDone = usePrevious(isDone);

  return isDone ? (
    <S.TaskLine>
      <CheckMark done={true} />
      {active === 'all' && prevIsDone !== undefined ? (
        <Cross>
          <P variant='done'>{children}</P>
        </Cross>
      ) : (
        <P variant='done'>{children}</P>
      )}
    </S.TaskLine>
  ) : (
    <S.TaskLine>
      <CheckMark done={false} />
      <P variant='todo'>{children}</P>
    </S.TaskLine>
  );
});
