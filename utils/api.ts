import { NextResponse } from 'next/server';

export const createURL = (path: string) => window.location.origin + path;

interface NameTypes {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
}

interface TaskTypes {
  title: string;
  dueDate: string;
  hours: number;
  weekNumber: number;
  userId: string;
}

export const createUser = async (name: NameTypes) => {
  const res = await fetch(
    new Request(createURL('/api/team'), {
      method: 'POST',
      body: JSON.stringify({
        firstName: name.firstName,
        lastName: name.lastName,
      }),
    })
  );

  if (res.ok) {
    const data = await res.json();

    return data.data;
  } else {
    throw new Error(`Something went wrong ${Error}`);
  }
};

export const createTask = async (task) => {
  const res = await fetch(
    new Request(createURL('/api/task'), {
      method: 'POST',
      body: JSON.stringify({
        title: task.title,
        dueDate: task.title,
        hours: task.hours,
        weekNumber: task.weekNumber,
        userId: task.userId,
      }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error('something went wrong');
  }
};

export const getUsers = async () => {
  const users = await fetch(
    new Request(createURL('/api/team/'), {
      method: 'GET',
    })
  );

  if (users.ok) {
    const data = await users.json();
    return data;
  }
};
