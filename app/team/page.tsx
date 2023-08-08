import CreateUser from '@/components/createUser/createUser';
import { prisma } from '@/utils/db';
import Link from 'next/link';

import FlexContainer from '@/components/layout/flexContainer';
import UserCard from '@/components/createUser/userCard';
import { get } from 'http';

const getUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
  });

  return users;
};

const Team = async () => {
  const users = await getUsers();

  return (
    <>
      <CreateUser />
      <div>
        <FlexContainer flexFlow='col'>
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/team/${user.id}`}
            >
              <UserCard user={user} />
            </Link>
          ))}
        </FlexContainer>
      </div>
    </>
  );
};

export default Team;
