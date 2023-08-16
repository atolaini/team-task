import { getUsers } from '@/utils/actions/users.actions';
import { getTasks } from '@/utils/actions/tasks.actions';

import CreateTask from '@/components/task/createTask';

import TaskContainer from '@/components/task/taskContainer';
import SideTaskList from '@/components/task/sideTaskList';

const TaskPage = async ({ params }) => {
  const path = params.path;

  const users = await getUsers();
  const tasks = await getTasks(path);

  return (
    <div>
      <TaskContainer>
        <CreateTask allUsers={users} />
        <SideTaskList taskData={tasks} />
      </TaskContainer>
    </div>
  );
};

export default TaskPage;
