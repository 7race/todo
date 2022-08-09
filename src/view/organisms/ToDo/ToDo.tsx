import { Input } from '@atoms/Input';
import { AllTasks } from '@organisms/Tasks/AllTasks/AllTasks';
import { DoneTasks } from '@organisms/Tasks/DoneTasks/DoneTasks';
import { TodoTasks } from '@organisms/Tasks/TodoTasks/TodoTasks';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { useState } from 'react';
import { clearDoneTasks, createNewTask } from '@redux/slices/Tasks';
import { P } from '@atoms/P';
import { TypeTasks } from '@molecules/TypeTasks';
import * as S from './ToDo.styled';

export const ToDo = () => {
  const { todoTasks, active } = useAppSelector((state) => state.Tasks);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value === '') return;
    if (e.key === 'Enter') {
      dispatch(createNewTask({ value }));
      setValue('');
    }
  };

  const switchActvieTasks = () => {
    switch (active) {
      case 'all':
        return (
          <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
            <Input onKeyDown={onKeyDownHandler} value={value} onChange={onChange} placeholder='What need to be done?' />
            <AllTasks />
          </div>
        );
      case 'todo':
        return <TodoTasks />;
      case 'done':
        return <DoneTasks />;
    }
  };

  return (
    <S.ToDo>
      <S.TasksList>{switchActvieTasks()}</S.TasksList>
      <S.BottomLine>
        <P variant='subText'>{todoTasks.length} items</P>
        <TypeTasks />
        <S.ClearBtn>
          <P variant='subText' onClick={() => dispatch(clearDoneTasks())}>
            Clear completed
          </P>
        </S.ClearBtn>
      </S.BottomLine>
    </S.ToDo>
  );
};
