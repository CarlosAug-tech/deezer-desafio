import store from '../../store';
import { IToast } from '../../store/modules/Toasts/types';

import * as actions from '../../store/modules/Toasts/actions';

export async function addToast(toast: IToast) {
  const {
    toasts: { toasts },
  } = store.getState();

  actions.setToasts([...toasts, toast]);
}

export async function removeToast(id: string) {
  const {
    toasts: { toasts },
  } = store.getState();

  const newArr = toasts.filter((item) => item.id !== id && item);
  actions.setToasts(newArr);
}
