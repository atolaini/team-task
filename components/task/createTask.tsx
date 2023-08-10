'use client';
import classes from '@/styles/forms/input.module.scss';

interface CreateTaskProps {
  onSaveFormData: (taskObj: {}) => void;
}

import { useState, useEffect, useRef } from 'react';

import { getUsers } from '@/utils/api';
import { createTask } from '@/utils/api';
import { yearWeek } from '@/utils/helpers';

import Form from '../forms/form';
import Input from '../forms/input';
import Button from '../ui/button';
import { type } from 'os';

const CreateTask = ({ onSaveFormData }: CreateTaskProps) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [hours, setHours] = useState('');
  const [notes, setNotes] = useState('');
  const [users, setUsers] = useState([]);

  const currentWeek = yearWeek();

  const onChangeHandlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = `${e.target[e.target.selectedIndex].dataset.id}`;

    setName(e.target.value);
    setUserId(userId);
  };

  const onChangeHandlerTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeHandlerDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const onChangeHandlerHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    const toNumber: number = Number(e.target.value);
    setHours(toNumber);
  };

  const onChangeHandlerNotes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(e.target.value);
  };

  useEffect(() => {
    const response = async () => {
      const users = await getUsers();

      setUsers(users);
    };
    response();
  }, []);

  const submitFormHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dueDateISO = new Date(dueDate).toISOString();

    const taskObj = {
      name: name,
      userId: userId,
      title: title,
      dueDate: dueDateISO,
      hours: hours,
      notes: notes,
      weekNumber: currentWeek,
    };

    onSaveFormData(taskObj);
    createTask(taskObj);

    setUserId('');
    setTitle('');
    setDueDate('');
    setHours('');
    setNotes('');
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
          name='selectUser'
          id='userId'
          onChange={onChangeHandlerSelect}
        >
          <option>Select user</option>
          {users.map((user) => (
            <option
              key={user.id}
              value={`${user.firstName} ${user.lastName}`}
              data-id={`${user.id}`}
            >
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
      </div>
      <Input
        label='Task title'
        id='task title'
        name='title'
        onChangeHandler={onChangeHandlerTitle}
        value={title}
      />
      <Input
        type='date'
        label='Due date'
        id='due date'
        name='dueDate'
        onChangeHandler={onChangeHandlerDate}
        value={dueDate}
      />
      <Input
        type='number'
        label='Hours'
        id='hours'
        name='hours'
        onChangeHandler={onChangeHandlerHours}
        value={hours}
      />
      <Input
        type='text-area'
        label='Notes'
        id='notes'
        name='notes'
        onChangeHandler={onChangeHandlerNotes}
        value={notes}
      />
      <Button
        btnTxt='Add Task'
        type='submit'
      />
    </Form>
  );
};

export default CreateTask;
