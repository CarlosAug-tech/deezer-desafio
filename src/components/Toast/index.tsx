import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useTransition } from 'react-spring';

import { Container, Content } from './styles';
import ToastItem from './ToastItem';

export interface IToastObjProps {
  id: string;
  type: 'success' | 'error';
  title: string;
  description?: string;
}

interface IToastProps {
  toasts: IToastObjProps[];
}

const Toast: React.FC<IToastProps> = ({ toasts }) => {
  const toastTransactions = useTransition(toasts, (toast) => toast.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });
  return (
    <Container>
      {toastTransactions.map(({ item, key, props }) => (
        <ToastItem toast={item} key={key} style={props} />
      ))}
    </Container>
  );
};

export default Toast;
