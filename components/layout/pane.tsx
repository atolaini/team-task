import classes from '@/styles/layout/layout.module.scss';

interface PaneProps {
  children: React.ReactNode;
}

const Pane = ({ children }: PaneProps) => {
  return <div className={classes.pane}>{children}</div>;
};

export default Pane;
