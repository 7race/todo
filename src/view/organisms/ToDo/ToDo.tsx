import { Input } from '@atoms/Input';
import { BottomLine } from '@organisms/BottomLine';
import { TaskLine } from '@organisms/TaskLine';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { useAppSelector } from '@redux/hooks';
import { Cross } from '../../../styles/animations';
import * as S from './ToDo.styled';

type Task = {
  id: string;
  text: string;
  isDone: boolean;
};

export const ToDo = () => {
  const [value, setValue] = useState('');
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const { active } = useAppSelector((state) => state.activeTasks);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const createTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value === '') return;
    const id = uniqid();
    if (e.key === 'Enter') {
      setAllTasks((prev) => [...prev, { id, text: value, isDone: false }]);
      setTodoTasks((prev) => [...prev, { id, text: value, isDone: false }]);
      setValue('');
    }
  };

  const clickTask = (e: React.MouseEvent<HTMLLIElement>, id: string, text: string, isDone: boolean) => {
    if (!isDone) {
      const all = allTasks.map((task) => (task.id === id ? { id, text, isDone: true } : task));
      const todo = todoTasks.filter((task) => task.id !== id);

      setAllTasks(all);
      setTodoTasks(todo);
      setDoneTasks((prev) => [...prev, { id, text, isDone: true }]);
    } else {
      const all = allTasks.map((task) => (task.id === id ? { id, text, isDone: false } : task));
      const done = doneTasks.filter((task) => task.id !== id);

      setAllTasks(all);
      setTodoTasks((prev) => [...prev, { id, text, isDone: false }]);
      setDoneTasks(done);
    }
  };

  const switchActvieTasks = () => {
    switch (active) {
      case 'all':
        return (
          <>
            <Input onKeyDown={createTask} value={value} onChange={onChange} placeholder='What need to be done?' />
            <ul>
              {allTasks.map(({ id, text, isDone }) => (
                <li key={id} onClick={(e) => clickTask(e, id, text, isDone)} style={{ cursor: 'pointer' }}>
                  <TaskLine isDone={isDone}>{text}</TaskLine>
                </li>
              ))}
            </ul>
          </>
        );
      case 'todo':
        return (
          <ul>
            {todoTasks.map(({ id, text, isDone }) => (
              <li key={id}>
                <TaskLine isDone={isDone}>{text}</TaskLine>
              </li>
            ))}
          </ul>
        );
      case 'done':
        return (
          <ul>
            {doneTasks.map(({ id, text, isDone }) => (
              <li key={id}>
                <TaskLine isDone={isDone}>{text}</TaskLine>
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
    <div>
      <S.ToDo>{switchActvieTasks()}</S.ToDo>
      <BottomLine todoCount={1} active='all' />
    </div>
  );
};

// todo
// animation cross
// tasks appear in start
// nice clear complete with briez
