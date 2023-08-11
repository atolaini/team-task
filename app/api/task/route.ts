import { prisma } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { title, hours, weekNumber, notes, dueDate, userId } = data.task;
  const task = await prisma.task.create({
    data: {
      title: title,
      hours: hours,
      weekNumber: weekNumber,
      notes: notes,
      dueDate: dueDate,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return NextResponse.json({ data: task });
};
