import classes from '../../styles/button.module.scss';

interface ButtonProps {
  btnTxt: string;
  type?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent
  ) => void;
}

const Button = ({ btnTxt, onClick }: ButtonProps) => {
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
