export const createURL = (path: string) => window.location.origin + path;

interface NameTypes {
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
}

interface TaskTypes {
  title: string;
  dueDate: Date;
  hours: number;
  weekNumber: string;
  userId: string;
  notes: string;
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
  const res = await fetch(
    new Request(createURL('/api/task'), {
      method: 'POST',
      body: JSON.stringify({ task }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    console.log('from api task' + JSON.stringify(data.data));
    return data.data;
  } else {
    throw new Error('something went wrong');
  }
};
