'use client';
import { useState } from 'react';
import { createUser } from '@/utils/api';

import FlexContainer from '../layout/flexContainer';
import Button from '../ui/button';
import Modal from '../ui/modal';
import Form from '../forms/form';
import Input from '../forms/input';

const CreateUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);
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
            action='/api/team'
            onSubmit={onSubmitHandler}
          >
            <FlexContainer flexFlow='row'>
              <Input
                label='First Name'
                isRequired={true}
              />
              <Input
                label='Last Name'
                isRequired={true}
              />
            </FlexContainer>
            <Button
              btnTxt='Add Team member'
              onClick={onSubmitHandler}
              type='submit'
            />
          </Form>
        </Modal>
      ) : null}
    </div>
  );
};

export default CreateUser;
