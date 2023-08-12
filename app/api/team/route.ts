import { prisma } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const users = await prisma.user.findMany();

  console.log('server ', users);

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
