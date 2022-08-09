import { TaskLine } from '@organisms/TaskLine';
import { useAppSelector } from '@redux/hooks';

export const TodoTasks = () => {
  const { todoTasks } = useAppSelector((state) => state.Tasks);
  return (
    <ul>
      {todoTasks.map(({ id, value, isDone }) => (
        <li key={id}>
          <TaskLine isDone={isDone}>{value}</TaskLine>
        </li>
      ))}
    </ul>
  );
};
