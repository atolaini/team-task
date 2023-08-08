'use client';

import { getAllUsers } from '@/utils/api';

import FlexContainer from '../layout/flexContainer';
import UserCard from './userCard';
import Link from 'next/link';

const GetAllUsers = () => {
  const users = getAllUsers();

  console.log(typeof users.data);

  return (
    <FlexContainer flexFlow='col'>
      {/* {users.map((user) => (
        <Link
          key={user.id}
          href={`/team/${user.id}`}
        >
          <UserCard user={user} />
        </Link>
      ))} */}
    </FlexContainer>
  );
};

export default GetAllUsers;
