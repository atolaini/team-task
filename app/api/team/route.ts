import { prisma } from '@/utils/db';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();

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

  revalidatePath('http://localhost:3000/team');

  return NextResponse.json({ data: user });
};
