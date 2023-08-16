import Link from 'next/link';

import { getUsers } from '@/utils/actions/users.actions';
import { User } from '@/utils/interfaces';

import FlexContainer from '@/components/layout/flexContainer';
import Button from '@/components/ui/button';
import UserCard from '@/components/createUser/userCard';
import GetAllUsers from '@/components/createUser/getAllUsers';

const Team = async () => {
  const users = await getUsers();

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
