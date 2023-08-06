import classes from '../../styles/card.module.scss';
import { Generics } from '@/lib/interfaces';

const Card = ({ children }: Generics) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
