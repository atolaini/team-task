'use client';
import { createUser } from '@/utils/api';
import { useRouter } from 'next/navigation';

import FlexContainer from '../layout/flexContainer';
import Button from '../ui/button';
import Form from '../forms/form';
import Input from '../forms/input';

const CreateUser = () => {
  const router = useRouter();

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nameObject = {
      firstName: formData.get('first name') ?? '',
      lastName: formData.get('last name') ?? '',
    };

    createUser(nameObject);
    router.push('/team');
  };

  return (
    <div>
      <Form
        title='Add team member'
        onSubmit={onSubmitHandler}
      >
        <FlexContainer flexFlow='row'>
          <Input
            label='First Name'
            isRequired={true}
            id='first name'
            name='first name'
          />
          <Input
            label='Last Name'
            isRequired={true}
            id='last name'
            name='last name'
          />
        </FlexContainer>
        <Button
          btnTxt='Add Team member'
          type='submit'
        />
      </Form>
    </div>
  );
};

export default CreateUser;
