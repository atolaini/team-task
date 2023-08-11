//import { prisma } from '@/utils/db';

export const yearWeek = () => {
  const currentDate: any = new Date();
  const startDate: any = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);

  return weekNumber;
};

export const currentYear = () => {
  const currentDate: any = new Date();
  const currentYear = currentDate.getFullYear();

  return currentYear;
};
