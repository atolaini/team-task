import classes from '@/styles/layout/taskContainer.module.scss';
import { v4 as uuid } from 'uuid';

import { UserTask } from '@/utils/interfaces';

interface SidetaskListProps {
  taskData: UserTask[];
}

interface TaskValues {
  userId: string;
  name: string;
}

import Card from '../ui/card';
import Button from '../ui/button';
import { createTask } from '@/utils/api';

const SideTaskList = ({ taskData }: SidetaskListProps) => {
  return (
    <div className={classes.listContainer}>
      <h4>Tasks</h4>
      <ul>
        <li>
          {taskData?.map((task: TaskValues) => (
            <Card key={uuid()}>
              <p>Name:</p>
              <p>{task.name}</p>
            </Card>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default SideTaskList;
