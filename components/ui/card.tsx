import classes from '@/styles/ui/card.module.scss';
import { Generics } from '@/utils/interfaces';

const Card = ({ children }: Generics) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
