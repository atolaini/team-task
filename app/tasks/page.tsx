import { getUsers } from '@/utils/actions/users.actions';

import CreateTask from '@/components/task/createTask';

import TaskContainer from '@/components/task/taskContainer';
import SideTaskList from '@/components/task/sideTaskList';

const TaskPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <TaskContainer>
        <CreateTask allUsers={users} />
        <SideTaskList userTask={users} />
      </TaskContainer>
    </div>
  );
};

export default TaskPage;
