import classes from '@/styles/layout/taskContainer.module.scss';

import { Generics } from '@/utils/interfaces';

const TaskContainer = ({ children }) => {
  const [left, right] = children;

  return (
    <div className={classes.taskContainer}>
      <section>{left}</section>
      <aside>{right}</aside>
    </div>
  );
};

export default TaskContainer;
