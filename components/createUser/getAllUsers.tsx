'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// import { getUsers } from '@/utils/api';

import Link from 'next/link';
import UserCard from './userCard';

interface UserTypes {
  id: string;
  firstName: string;
  lastName: string;
}

const GetAllUsers = ({ users }: { users: User[] }) => {
  // const [users, setUsers] = useState([]);
  // const router = useRouter();

  // console.log('did mount');

  // useEffect(() => {
  //   const response = async () => {
  //     const users = await getUsers();

  //     setUsers(users);
  //     router.refresh();
  //   };
  //   response();
  // }, [router]);

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
