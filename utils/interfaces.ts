export interface Generics {
  children: React.ReactNode;
}

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: User;
  title: string;
  dueDate: string | null;
  hours: number;
  notes: string | null;
  weekNumber: string;
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
