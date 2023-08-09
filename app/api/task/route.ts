import { prisma } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async () => {
  const task = await prisma.task.create({
    data: {
      title: 'This is a test',
      dueDate: '2023-08-09T11:04:50.972Z',
      hours: 32,
      weekNumber: 32,
      user: {
        connect: {
          id: '6c73b9df-5188-4a43-825a-fe088c52c305',
        },
      },
    },
  });

  return NextResponse.json({ data: task });
};
