import classes from '../../styles/button.module.scss';

interface ButtonProps {
  btnTxt: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
