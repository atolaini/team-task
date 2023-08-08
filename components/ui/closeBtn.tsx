import classes from '@/styles/ui/closeBtn.module.scss';

import { X } from 'react-feather';

interface CloseBtnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CloseBtn = ({ onClick }: CloseBtnProps) => {
  return (
    <button
      className={classes.closeBtn}
      onClick={onClick}
      type='button'
    >
      <X
        color='white'
        size={28}
      />
    </button>
  );
};

export default CloseBtn;
