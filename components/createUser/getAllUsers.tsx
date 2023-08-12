import { getUsers } from '@/utils/api';

import Link from 'next/link';
import UserCard from './userCard';

interface UserTypes {
  id: string;
}

const GetAllUsers = async () => {
  const data: Promise<User[]> = getUsers();
  const users = await data;

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
