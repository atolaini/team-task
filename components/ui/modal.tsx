'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Generics } from '@/lib/interfaces';
import { Divide } from 'react-feather';

const Modal = ({ children }: Generics) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot?.appendChild(elRef.current);

    return () => modalRoot?.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
