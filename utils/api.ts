import { NextResponse } from 'next/server';

export const createURL = (path: string) => window.location.origin + path;

interface NameTypes {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
}

interface TaskTypes {
  title: FormDataEntryValue;
  dueDate: Date;
  hours: FormDataEntryValue;
  weekNumber: number;
  userId: FormDataEntryValue;
  notes: FormDataEntryValue;
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

export const createTask = async (task: TaskTypes) => {
  console.log('from api' + JSON.stringify(task));

  const res = await fetch(
    new Request(createURL('/api/task'), {
      method: 'POST',
      body: JSON.stringify({
        title: task.title,
        hours: task.hours,
        weekNumber: task.weekNumber,
        userId: task.userId,
        notes: task.notes,
        dueDate: task.dueDate,
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
