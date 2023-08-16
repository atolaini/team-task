'use server';

import { prisma } from '@/utils/db';
import { UserTask } from '@/utils/interfaces';

interface Task {
  id?: string;
  path?: string;
}

export const createTask = async (task: UserTask) => {
  const { title, hours, weekNumber, notes, dueDate, userId } = task;

  try {
    const task = await prisma.task.create({
      data: {
        title: title,
        hours: hours,
        weekNumber: weekNumber,
        notes: notes,
        dueDate: dueDate,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    throw new Error(`There was an error creating the task ${error}`);
  }
};

export const getTasks = async ({ id, path }: Task) => {
  try {
    if (path === '/task') {
      const tasks = await prisma.task.findMany();
      return tasks;
    } else {
      const tasks = await prisma.task.findUnique({
        where: {
          id: id,
        },
      });
      return tasks;
    }
  } catch (error) {
    throw new Error(`There was an error getting the tasks ${error}`);
  }
};
