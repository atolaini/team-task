import Card from './card';

import classes from '@/styles/components/current-week.module.scss';

const CurrentWeek = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const currentYear = currentDate.getFullYear();

  const weekNumber = Math.ceil(days / 7);

  return (
    <Card>
      <p className={classes.currentWeek}>
        Week <span>{weekNumber}</span> of <span>{currentYear}</span>
      </p>
    </Card>
  );
};

export default CurrentWeek;
