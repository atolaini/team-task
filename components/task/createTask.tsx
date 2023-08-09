'use client';
import classes from '@/styles/forms/input.module.scss';

import { useState, useEffect } from 'react';

import { createURL } from '@/utils/api';
import { getUsers } from '@/utils/api';

import Form from '../forms/form';
import Input from '../forms/input';
import UserSelect from './userSelect';
import Button from '../ui/button';

const CreateTask = () => {
  const [task, setTask] = useState([{}]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const users = await getUsers();

      setUsers(users);
    };
    response();
  }, []);

  const submitFormHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const taskObject = {
      title: formData.get('task title') ?? '',
      date: formData.get('due date') ?? '',
      hours: formData.get('hours') ?? '',
      notes: formData.get('notes') ?? '',
      id: formData.get('select user') ?? '',
    };

    setTask((prevState) => [...prevState, taskObject]);
  };

  return (
    <Form
      title='Create task'
      onSubmit={submitFormHandler}
    >
      <div className={classes.formControl}>
        <label htmlFor='select user'>Select Team member</label>
        <select
          className={classes.select}
          name='select user'
          id='select user'
        >
          {users.map((user) => (
            <option
              key={user.id}
              value={`${user.id}`}
            >
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
      </div>
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
      <Button
        btnTxt='Add Task'
        type='submit'
      />
    </Form>
  );
};

export default CreateTask;
