import { prisma } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { update } from '@/utils/actions';

import { getAllUsers } from '@/utils/api';

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  update(['/team']);

  return NextResponse.json({ data: user });
};

export const GET = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
  });

  return NextResponse.json({ data: users });
};
