import store from '../..';
import { IToast, ToastAction, ToastStore, ToastTypes } from './types';

export const setToasts = (toasts: IToast[]) =>
  store.dispatch<ToastAction>({
    idStore: ToastStore.ID_STORE,
    type: ToastTypes.ADD_TOAST,
    toasts,
  });
