import Link from 'next/link';

import FlexContainer from '@/components/layout/flexContainer';
import Button from '@/components/ui/button';
import GetAllUsers from '@/components/createUser/getAllUsers';

const Team = async () => {
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
          <GetAllUsers />
        </FlexContainer>
      </div>
    </>
  );
};

export default Team;
