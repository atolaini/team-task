'use server';

import { prisma } from '@/utils/db';
import { revalidatePath } from 'next/cache';

import { User } from '@/utils/interfaces';

export const getUsers = async () => {
  try {
    const users = prisma.user.findMany({
      orderBy: {
        firstName: 'asc',
      },
      include: {
        tasks: true,
      },
    });

    return users;
  } catch (error) {
    throw new Error(`Error is geting users ${error}`);
  }
};

export const createUser = async ({ firstName, lastName }: User) => {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
      },
    });
    revalidatePath('/team');
    return user;
  } catch (error) {
    throw new Error(`Error is creating user ${error}`);
  }
};
