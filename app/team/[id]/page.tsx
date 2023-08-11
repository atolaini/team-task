import { prisma } from '@/utils/db';
import FlexContainer from '@/components/layout/flexContainer';
import Card from '@/components/ui/card';

const getUserTasks = async (id: string) => {
  const userTasks = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      tasks: true,
    },
  });

  return userTasks;
};

const UserProfile = async ({ params }) => {
  const id = params.id;
  const userTasks = await getUserTasks(id);
  const allHours: number[] = [];

  const sumOfHours = (input: number[]) => {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
      total += input[i];
    }

    return total;
  };

  userTasks?.tasks.map((task) => {
    const hours = task.hours;
    allHours.push(hours);
  });

  const totalHours = await sumOfHours(allHours);

  return (
    <FlexContainer flexFlow='col'>
      <h2>
        {userTasks?.firstName} {userTasks?.lastName}
      </h2>
      <h3>number of hours this week: {totalHours}</h3>
      {userTasks?.tasks.map((task) => (
        <Card key={task.id}>{task.title}</Card>
      ))}
    </FlexContainer>
  );
};

export default UserProfile;
