import { P } from '@atoms/P';
import { CheckMark } from '@molecules/CheckMark';
import React from 'react';
import * as S from './TaskLine.styled';

type TaskLineProps = {
  children: string;
  isDone: boolean;
};

export const TaskLine = React.memo(({ children, isDone }: TaskLineProps) =>
  isDone ? (
    <S.TaskLine data-testid='done'>
      <CheckMark done={true} />
      <P variant='done'>{children}</P>
    </S.TaskLine>
  ) : (
    <S.TaskLine data-testid='todo'>
      <CheckMark done={false} />
      <P variant='todo'>{children}</P>
    </S.TaskLine>
  )
);
