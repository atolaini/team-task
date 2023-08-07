'use client';
import { useState } from 'react';

import Button from '../ui/button';
import Modal from '../ui/modal';

const CreateUser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button
        btnTxt='Add team member'
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <Modal>
          <h2>Add a team member</h2>
        </Modal>
      ) : null}
    </div>
  );
};

export default CreateUser;
