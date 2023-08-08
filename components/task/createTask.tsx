'use client';
import Form from '../forms/form';
import Input from '../forms/input';
import UserSelect from './userSelect';
import Button from '../ui/button';
import { User } from 'react-feather';

const CreateTask = () => {
  return (
    <Form title='Create task'>
      <UserSelect />
      <Input
        label='Task title'
        id='task title'
        name='task title'
      />
      <Input
        type='date'
        label='Due date'
        id='due date'
        name='due date'
      />
      <Input
        type='number'
        label='Hours'
        id='hours'
        name='hours'
      />
      <Input
        type='text-area'
        label='Notes'
        id='notes'
        name='notes'
      />
      <Button btnTxt='Add Task' />
    </Form>
  );
};

export default CreateTask;
