import Card from './card';

import { currentYear, yearWeek } from '@/utils/helpers';

import classes from '@/styles/components/current-week.module.scss';

const CurrentWeek = () => {
  const weekNumber = yearWeek();
  const year = currentYear();

  return (
    <Card>
      <p className={classes.currentWeek}>
        Week <span>{weekNumber}</span> of <span>{year}</span>
      </p>
    </Card>
  );
};

export default CurrentWeek;
