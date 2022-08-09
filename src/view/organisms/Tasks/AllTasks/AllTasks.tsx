import { TaskLine } from '@organisms/TaskLine';
import React from 'react';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setAll, setTodo, setDone } from '@redux/slices/Tasks';

export const AllTasks = () => {
  const { allTasks } = useAppSelector((state) => state.Tasks);
  const dispatch = useAppDispatch();

  const setTasks = (e: React.MouseEvent<HTMLLIElement>, id: string, value: string, isDone: boolean) => {
    dispatch(setAll({ id, value, isDone }));
    dispatch(setTodo());
    dispatch(setDone());
  };
  return (
    <ul>
      {allTasks.map(({ id, value, isDone }) => (
        <li key={id} onClick={(e) => setTasks(e, id, value, isDone)} style={{ cursor: 'pointer' }}>
          <TaskLine isDone={isDone}>{value}</TaskLine>
        </li>
      ))}
    </ul>
  );
};
