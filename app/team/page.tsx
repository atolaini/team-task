import Link from 'next/link';

import { getUsers } from '@/utils/api';

import FlexContainer from '@/components/layout/flexContainer';
import Button from '@/components/ui/button';
import GetAllUsers from '@/components/createUser/getAllUsers';

const Team = async () => {
  const userData: Promise<User[]> = getUsers();
  const users = await userData;

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
