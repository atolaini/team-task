'use client';

import classes from '../../styles/modal.module.scss';

import { MutableRefObject, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Generics } from '@/lib/interfaces';

const Modal = ({ children }: Generics) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');

    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot?.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        modalRoot?.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(
    <div className={classes.modal}>{children}</div>,
    elRef.current
  );
};

export default Modal;
