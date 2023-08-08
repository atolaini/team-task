'use client';

import classes from '@/styles/forms/input.module.scss';

import { createURL } from '@/utils/api';
import { useEffect, useState } from 'react';

const UserSelect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const users = await fetch(
        new Request(createURL('/api/team/'), {
          method: 'GET',
        })
      );

      if (users.ok) {
        const data = await users.json();

        setUsers(data);
      }
    };
    response();
  }, []);

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
          >
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
