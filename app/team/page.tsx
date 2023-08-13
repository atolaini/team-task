import Link from 'next/link';

import { getUsers } from '@/utils/api';

import FlexContainer from '@/components/layout/flexContainer';
import Button from '@/components/ui/button';
import { User } from '@/utils/interfaces';

const Team = async () => {
  const users: User[] = await getUsers();

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
          {users?.map((user) => (
            <div key={user.id}>user</div>
          ))}
        </FlexContainer>
      </div>
    </>
  );
};

export default Team;
