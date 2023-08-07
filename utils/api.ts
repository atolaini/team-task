import { prisma } from '@/utils/db';

const createUrl = (path: string) => {
  return window.location.origin + path;
};

export const createUser = async (name: {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
}) => {
  const res = await fetch(
    new Request(createUrl('/api/team'), {
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
  const res = await fetch(new Request(createUrl('/api/team')));

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error(`this is the error ${Error}`);
  }
};
