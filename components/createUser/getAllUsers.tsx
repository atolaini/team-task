'use client';

// import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// import { getUsers } from '@/utils/api';

import Link from 'next/link';
import UserCard from './userCard';

interface UserTypes {
  id: string;
  firstName: string;
  lastName: string;
}

const GetAllUsers = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map((user: UserTypes) => (
        <Link
          key={user.id}
          href={`/team/${user.id}`}
        >
          <UserCard user={user} />
        </Link>
      ))}
    </>
  );
};
export default GetAllUsers;
