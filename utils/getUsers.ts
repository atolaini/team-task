import { prisma } from '@/utils/db';

export const getUsers = async () => {
  console.log('getting data');

  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
  });

  return users;
};
