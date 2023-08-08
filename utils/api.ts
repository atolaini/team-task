import { NextResponse } from 'next/server';

const createURL = (path: string) => window.location.origin + path;

export const createUser = async (name: {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
}) => {
  const res = await fetch(
    new Request(createURL('/api/users'), {
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
