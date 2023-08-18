'use client';

import { useEffect, useState } from 'react';
import classes from '@/styles/task/sideTaskList.module.scss';
import { v4 as uuid } from 'uuid';

import { User } from '@/utils/interfaces';

interface SidetaskListProps {
  userTask: User[];
}

import Card from '../ui/card';

const SideTaskList = ({ userTask }: SidetaskListProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(userTask);
  }, [userTask]);

  const calculateTotalHours = (tasks: User[]) => {
    return tasks.reduce((totalHours, task) => totalHours + task.hours, 0);
  };

  return (
    <div className={classes.listContainer}>
      <h4>Tasks</h4>
      <ul>
        <li>
          {users?.map((task) => (
            <Card key={uuid()}>
              <p>Name:</p>
              <p>{task.firstName}</p>
              <p>Number of tasks</p>
              <p>{task.tasks.length}</p>
              <p>Total hours</p>
              {calculateTotalHours(task.tasks)}
            </Card>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default SideTaskList;
