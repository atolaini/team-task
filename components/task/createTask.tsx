'use client';
import classes from '@/styles/forms/input.module.scss';
import { useState, useEffect } from 'react';

import { getUsers } from '@/utils/api';
import { createTask } from '@/utils/api';
import { yearWeek } from '@/utils/helpers';

import Form from '../forms/form';
import Input from '../forms/input';
import Button from '../ui/button';

interface CreateTaskProps {
  onSaveFormData: (taskObj: {
    name: string;
    userId: string;
    title: string;
    dueDate?: string;
    hours: number;
    notes: string;
    weekNumber: string;
  }) => void;
}

interface UserTypes {
  id: string;
  firstName: string;
  lastName: string;
}

const CreateTask = ({ onSaveFormData }: CreateTaskProps) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [hours, setHours] = useState('');
  const [notes, setNotes] = useState('');
  const [users, setUsers] = useState([]);

  const currentWeek = yearWeek().toString();

  const onChangeHandlerSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const userId = `${event.target[event.target.selectedIndex].dataset.id}`;

    setName(event.target.value);
    setUserId(userId);
  };

  const onChangeHandlerTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeHandlerDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(event.target.value);
  };

  const onChangeHandlerHours = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(event.target.value);
  };

  const onChangeHandlerNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(event.target.value);
  };

  useEffect(() => {
    const response = async () => {
      const users = await getUsers();

      setUsers(users);
    };
    response();
  }, []);

  const submitFormHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    let dueDateISO;

    if (dueDate) {
      dueDateISO = new Date(dueDate)?.toISOString();
    } else {
      dueDateISO = null;
    }

    const numberHours = Number(hours);

    console.log(typeof numberHours);

    const taskObj = {
      name: name,
      userId: userId,
      title: title,
      dueDate: dueDateISO,
      hours: numberHours,
      notes: notes,
      weekNumber: currentWeek,
    };

    onSaveFormData(taskObj);
    await createTask(taskObj);

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
          {users.map((user: UserTypes) => (
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
        isRequired={true}
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
