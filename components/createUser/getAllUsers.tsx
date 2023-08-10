'use client';

import { useEffect, useState } from 'react';
import { createURL } from '@/utils/api';
import Link from 'next/link';
import UserCard from './userCard';

interface UserTypes {
  id: string;
}

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const users = await fetch(
        new Request(createURL('/api/team/'), {
          cache: 'no-cache',
          method: 'GET',
        })
      );

      if (users.ok) {
        const data = await users.json();
        setUsers(data);
      }
    };

    response();
  }, []);

  console.log('this is data' + users);

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
