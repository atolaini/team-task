import classes from '@/styles/ui/userCard.module.scss';

import Card from '../ui/card';
import Badge from '../ui/badge';

interface UserCardProps {
  user: { firstName: string; lastName: string };
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card className={classes.userCard}>
      <p className='label'>
        {user.firstName} {user.lastName}
      </p>
      <Badge
        firstInital={user.firstName[0]}
        secondInital={user.lastName[0]}
      />
    </Card>
  );
};

export default UserCard;
