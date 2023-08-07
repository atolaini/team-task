import classes from '@/styles/forms/form.module.scss';

import { Generics } from '@/utils/interfaces';

interface FormProps extends Generics {
  title: string;
  action: string;
  onSubmit: () => void;
}

const Form = ({ children, title, action, onSubmit }: FormProps) => {
  return (
    <form
      className={classes.form}
      action={action}
      onSubmit={onSubmit}
    >
      <h2>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
