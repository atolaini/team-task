import classes from '@/styles/layout/taskContainer.module.scss';
import { v4 as uuid } from 'uuid';

interface SidetaskListProps {
  taskData: [];
}

interface TaskValues {
  userId: string;
  name: string;
}

import Card from '../ui/card';

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
