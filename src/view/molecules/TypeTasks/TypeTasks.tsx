import { P } from '@atoms/P';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { changeActiveStatus } from '@redux/slices/ActiveTasks';
import * as S from './TypeTasks.styled';

export const TypeTasks = () => {
  const { active } = useAppSelector((state) => state.activeTasks);
  const dispatch = useAppDispatch();

  return (
    <S.TypeTasks>
      <S.TypeTaskWrapper
        active={active === 'all'}
        onClick={() => {
          dispatch(changeActiveStatus('all'));
        }}
      >
        <P variant='subText'>All</P>
      </S.TypeTaskWrapper>
      <S.TypeTaskWrapper
        active={active === 'todo'}
        onClick={() => {
          dispatch(changeActiveStatus('todo'));
        }}
      >
        <P variant='subText'>Active</P>
      </S.TypeTaskWrapper>
      <S.TypeTaskWrapper
        active={active === 'done'}
        onClick={() => {
          dispatch(changeActiveStatus('done'));
        }}
      >
        <P variant='subText'>Completed</P>
      </S.TypeTaskWrapper>
    </S.TypeTasks>
  );
};
