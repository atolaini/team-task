import classes from '@/styles/layout/flexContainer.module.scss';

import { Generics } from '@/utils/interfaces';

interface FlexContainerProps extends Generics {
  flexFlow: string;
  className?: string;
}

const FlexContainer = ({
  children,
  flexFlow,
  className,
}: FlexContainerProps) => {
  if (flexFlow === 'row') {
    return <div className={classes.row}>{children}</div>;
  }

  if (flexFlow === 'col') {
    return <div className={classes.col}>{children}</div>;
  }
};

export default FlexContainer;
