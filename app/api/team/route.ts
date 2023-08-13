import { prisma } from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
  });

  revalidatePath('/team');

  return NextResponse.json(users);
};
