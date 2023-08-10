import classes from '@/styles/ui/button.module.scss';
import { HTMLAttributes } from 'react';

interface ButtonProps {
  btnTxt: string;
  type?: string;
  disabled?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent
  ) => void;
}

const Button = ({ btnTxt, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={classes.btn}
      onClick={onClick}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
