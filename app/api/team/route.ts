import { prisma } from '@/utils/db';
import revalidate from '@/utils/revalidate';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const users = await prisma.user.findMany();

  console.log('server ', users);

  revalidatePath('http://localhost:3000/team');

  return NextResponse.json(users);
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  return NextResponse.json({ data: user });
};
