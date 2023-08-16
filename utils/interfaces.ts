export interface Generics {
  children: React.ReactNode;
}

export interface User {
  firstName: string;
  lastName: string;
  id?: string;
}

export interface Task {
  title: FormDataEntryValue;
  dueDate: FormDataEntryValue;
  hours: FormDataEntryValue;
  notes: FormDataEntryValue;
  weekNumber: number;
}

export interface UserTask {
  name: string;
  userId: string;
  title: string;
  hours: number;
  notes: string;
  weekNumber: string;
  dueDate?: any;
}
