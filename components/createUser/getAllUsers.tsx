'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getUsers } from '@/utils/api';
import { User } from '@/utils/interfaces';

import Link from 'next/link';
import UserCard from './userCard';

const GetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  console.log('did mount');

  useEffect(() => {
    const response = async () => {
      const users = await getUsers();

      setUsers(users);
      router.refresh();
    };
    response();
  }, [router]);

  return (
    <>
      {users.map((user: User) => (
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
