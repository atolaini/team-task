'use client';
import { useState } from 'react';

import CreateTask from '@/components/task/createTask';

import TaskContainer from '@/components/task/taskContainer';
import SideTaskList from '@/components/task/sideTaskList';
import { UserTask } from '@/utils/interfaces';

const TaskPage = () => {
  const [task, setTask] = useState<{}[]>([]);

  const saveTaskDataHandler = (newTaskData: {}) => {
    const newTask = {
      ...newTaskData,
    };

    setTask((prevState) => [...prevState, newTask]);
  };

  return (
    <div>
      <TaskContainer>
        <CreateTask onSaveFormData={saveTaskDataHandler} />
        <SideTaskList taskData={task} />
      </TaskContainer>
    </div>
  );
};

export default TaskPage;
