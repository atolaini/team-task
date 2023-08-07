import classes from '@/styles/ui/badge.module.scss';

interface BadeProps {
  firstInital: string;
  secondInital: string;
}

const Badge = ({ firstInital, secondInital }: BadeProps) => {
  return (
    <div className={classes.badge}>
      <p>
        {firstInital}
        {secondInital}
      </p>
    </div>
  );
};

export default Badge;
