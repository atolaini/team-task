import { prisma } from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = async (firstName: string, lastName: string) => {
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
    },
  });

  return NextResponse.json({ data: user });
};
