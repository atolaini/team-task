import { prisma } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const task = await prisma.task.create({
    data: {
      title: data.title,
      hours: data.hours,
      weekNumber: data.weekNumber,
      notes: data.notes,
      dueDate: data.dueDate,
      user: {
        connect: {
          id: data.userId,
        },
      },
    },
  });

  return NextResponse.json({ data: task });
};
