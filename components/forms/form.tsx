import classes from '@/styles/forms/form.module.scss';

import { Generics } from '@/utils/interfaces';

interface FormProps extends Generics {
  title: string;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

const Form = ({ children, title, onSubmit }: FormProps) => {
  return (
    <form
      className={classes.form}
      onSubmit={onSubmit}
    >
      <h2>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
