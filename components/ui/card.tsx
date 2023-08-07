import classes from '@/styles/ui/card.module.scss';
import { Generics } from '@/utils/interfaces';

interface CardProps extends Generics {
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
