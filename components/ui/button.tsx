import classes from '@/styles/ui/button.module.scss';

interface ButtonProps {
  btnTxt: string;
  type?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent
  ) => void;
}

const Button = ({ btnTxt, onClick, type }: ButtonProps) => {
  return (
    <button
      className={classes.btn}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
