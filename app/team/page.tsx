'use client';

import Link from 'next/link';

import { getUsers } from '@/utils/api';
import { User } from '@/utils/interfaces';
import { useState, useEffect } from 'react';

import FlexContainer from '@/components/layout/flexContainer';
import Button from '@/components/ui/button';
import UserCard from '@/components/createUser/userCard';
import GetAllUsers from '@/components/createUser/getAllUsers';

export const dynamic = 'force-dynamic';

const Team = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const response = async () => {
      const userData: User[] = await getUsers();
      setUsers(userData);
    };

    response();
  }, []);

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
          <GetAllUsers users={users} />
        </FlexContainer>
      </div>
    </>
  );
};

export default Team;
