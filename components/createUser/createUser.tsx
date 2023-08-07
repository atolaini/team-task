'use client';
import React, { useState } from 'react';
import { createUser } from '@/utils/api';
import { useRouter } from 'next/router';

import FlexContainer from '../layout/flexContainer';
import Button from '../ui/button';
import Modal from '../ui/modal';
import Form from '../forms/form';
import Input from '../forms/input';

const CreateUser = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nameObject = {
      firstName: formData.get('first name') ?? '',
      lastName: formData.get('last name') ?? '',
    };

    createUser(nameObject);
    setShowModal(false);
  };

  return (
    <div>
      <Button
        btnTxt='Add team member'
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <Modal>
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
        </Modal>
      ) : null}
    </div>
  );
};

export default CreateUser;
