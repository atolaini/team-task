import { prisma } from '@/utils/db';
import Link from 'next/link';

import FlexContainer from '@/components/layout/flexContainer';
import UserCard from '@/components/createUser/userCard';
import Button from '@/components/ui/button';

const getUsers = async () => {
  console.log('fetching data');

  const users = await prisma.user.findMany();

  console.log(users);

  return users;
};

const Team = async () => {
  const users = await getUsers();

  console.log(users);

  return (
    <>
      <div>
        <Link href='/team/add-team-member'>
          <Button
            type='button'
            btnTxt='Add team member'
          />
        </Link>
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
