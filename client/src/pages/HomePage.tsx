import DefaultLayout from '../layouts/DefaultLayout';
import { useEndpoint } from '../hooks/fetchHooks';

const HomePage = (): JSX.Element => {
  const { data: dailyTasks } = useEndpoint('/daily');

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <ul>
        {dailyTasks
          ? (dailyTasks as any[]).map((task) => (
              <li key={task.task_id}>
                {task.title} ({task.time})
              </li>
            ))
          : null}
      </ul>
    </DefaultLayout>
  );
};

export default HomePage;
