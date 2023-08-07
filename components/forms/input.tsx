'use-client';

import classes from '@/styles/forms/input.module.scss';
import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  inputType?: string;
  isRequired: boolean;
  id: string;
  name: string;
  onChangeHandler?: (event: React.ChangeEvent) => void;
}

const Input = ({
  label,
  type,
  inputType,
  onChangeHandler,
  isRequired,
  id,
  name,
}: InputProps) => {
  const required = isRequired ? 'required' : null;

  if (inputType === 'text-area') {
    return (
      <div className={classes.formControl}>
        <label>{label}</label>
        <textarea onChange={onChangeHandler} />
      </div>
    );
  } else {
    return (
      <div className={`${classes.formControl} ${required}`}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChangeHandler}
          required={isRequired}
        />
      </div>
    );
  }
};

export default Input;
