'use client';

import Input from './input';

const Form = () => {
  const onChaneHandler = () => {
    console.log(3423423);
  };

  return (
    <Input
      type='text'
      label='user name'
      onChangeHandler={onChaneHandler}
    />
  );
};

export default Form;
