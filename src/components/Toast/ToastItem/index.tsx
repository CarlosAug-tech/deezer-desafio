import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { IToastObjProps } from '..';
import { removeToast } from '../../../controllers/ToastController';

import { Content } from './styles';

interface IToastItemProps {
  toast: IToastObjProps;
  style: any;
}

const ToastItem: React.FC<IToastItemProps> = ({ toast, style }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, removeToast]);

  return (
    <Content type={toast.type} style={style} description={toast.description}>
      {toast.type === 'error' ? (
        <FaTimes size={20} color="#c53030" />
      ) : (
        <FaCheckCircle size={20} color="#2e656a" />
      )}
      <div>
        <strong>{toast.title}</strong>
        {toast.description && <span>{toast.description}</span>}
      </div>
    </Content>
  );
};

export default ToastItem;
