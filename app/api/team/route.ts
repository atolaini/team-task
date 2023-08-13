import { prisma } from '@/utils/db';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
};
