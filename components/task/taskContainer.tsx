import classes from '@/styles/layout/taskContainer.module.scss';

interface TaskContainerProps {
  children: [React.ReactNode, React.ReactNode];
}

const TaskContainer = ({ children }: TaskContainerProps) => {
  const [left, right] = children;

  return (
    <div className={classes.taskContainer}>
      <section>{left}</section>
      <aside>{right}</aside>
    </div>
  );
};

export default TaskContainer;
