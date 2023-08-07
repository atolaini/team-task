import classes from '../../styles/card.module.scss';
import { Generics } from '@/lib/interfaces';

interface CardProps extends Generics {
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
