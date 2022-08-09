import { TaskLine } from '@organisms/TaskLine';
import { useAppSelector } from '@redux/hooks';

export const DoneTasks = () => {
  const { doneTasks } = useAppSelector((state) => state.Tasks);
  return (
    <ul>
      {doneTasks.map(({ id, value, isDone }) => (
        <li key={id}>
          <TaskLine isDone={isDone}>{value}</TaskLine>
        </li>
      ))}
    </ul>
  );
};
