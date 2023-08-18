'use server';

import { prisma } from '@/utils/db';
import { UserTask } from '@/utils/interfaces';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

interface Task {
  id?: string | undefined;
  path?: any;
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
    revalidatePath('/tasks');
  } catch (error) {
    throw new Error(`There was an error creating the task ${error}`);
  }
};

export const getTasks = async () => {
  try {
    const tasks = await prisma.task.findMany();
    return tasks;
  } catch (error) {
    throw new Error(`There was an error getting the tasks ${error}`);
  }
};
