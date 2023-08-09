import { NextResponse } from 'next/server';

export const createURL = (path: string) => window.location.origin + path;

export const createUser = async (name: {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
}) => {
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

export const createTask = async () => {
  const res = await fetch(
    new Request(createURL('/api/task'), {
      method: 'POST',
      body: JSON.stringify({ title: 'title' }),
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
