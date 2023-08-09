export interface Generics {
  children: React.ReactNode;
}

export interface CreateUser {
  name: {
    firstName: FormDataEntryValue;
    lastName: FormDataEntryValue;
  };
}

export interface CreateTask {
  title: FormDataEntryValue;
  dueDate: FormDataEntryValue;
  hours: FormDataEntryValue;
  notes: FormDataEntryValue;
  weekNumber: number;
}
