import { prisma } from '@/utils/db';
import Link from 'next/link';

import GetAllUsers from '@/components/createUser/getAllUsers';

import FlexContainer from '@/components/layout/flexContainer';
import UserCard from '@/components/createUser/userCard';
import { get } from 'http';
import Button from '@/components/ui/button';

// const getUsers = async () => {
//   const users = await prisma.user.findMany({
//     orderBy: {
//       firstName: 'asc',
//     },
//   });

//   return users;
// };

const Team = async () => {
  // const users = await getUsers();

  return (
    <>
      <div>
        <GetAllUsers />
        <Link href='/team/add-team-member'>
          <Button
            type='button'
            btnTxt='Add team member'
          />
        </Link>
      </div>
    </>
  );
};

export default Team;
