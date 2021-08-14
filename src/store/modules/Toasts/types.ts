export enum ToastStore {
  ID_STORE = 'TOAST',
}

export enum ToastTypes {
  ADD_TOAST = 'ADD_TOAST',
}

export type ToastAction = {
  idStore: ToastStore.ID_STORE;
  type: ToastTypes;
  toasts?: IToast[];
};

export interface ToastState {
  toasts: IToast[];
}

export interface IToast {
  id: string;
  type: 'success' | 'error';
  title: string;
  description?: string;
}
