import { prisma } from '@/utils/db';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

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
