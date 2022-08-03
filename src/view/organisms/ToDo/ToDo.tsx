import { Input } from '@atoms/Input';
import { TaskLine } from '@organisms/TaskLine';
import React, { useState } from 'react';
import uniqid from 'uniqid';

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

  return (
    <div>
      <Input onKeyDown={createTask} value={value} onChange={onChange} placeholder='What need to be done?' />
      <ul>
        {allTasks.map((task) => (
          <li key={task.id} onClick={(e) => clickTask(e, task.id, task.text, task.isDone)}>
            <TaskLine isDone={task.isDone}>{task.text}</TaskLine>
          </li>
        ))}
      </ul>
    </div>
  );
};
