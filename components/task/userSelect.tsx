'use client';

import { User } from '@/utils/interfaces';

import classes from '@/styles/forms/input.module.scss';

interface UserSelectProps {
  users: User[];
}

const UserSelect = ({ users }: UserSelectProps) => {
  return (
    <div className={classes.formControl}>
      <label htmlFor='select user'>Select Team member</label>
      <select
        className={classes.select}
        name='select user'
        id='select user'
      >
        {users.map((user) => (
          <option
            key={user.id}
            value={`${user.firstName} ${user.lastName}`}
            data-id={user.id}
          >
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
