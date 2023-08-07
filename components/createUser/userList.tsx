'use client';
import { useEffect, useState } from 'react';

import { getUsers } from '@/utils/api';

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await getUsers();
      const responseData = await response.json();
      console.log(requestData);
    };

    requestData();
  }, []);

  return <div>user list</div>;
};

export default UserList;
