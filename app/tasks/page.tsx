import CreateTask from '@/components/task/createTask';

import TaskContainer from '@/components/layout/taskContainer';
import SideTaskList from '@/components/task/sideTaskList';

const TaskPage = () => {
  return (
    <div>
      <TaskContainer>
        <CreateTask />
        <SideTaskList />
      </TaskContainer>
    </div>
  );
};

export default TaskPage;
