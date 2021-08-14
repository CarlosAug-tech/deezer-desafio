import { Reducer } from 'redux';
import { ToastAction, ToastState, ToastTypes } from './types';

const INITIAL_STATE = {
  toasts: [],
};

const toasts: Reducer<ToastState, ToastAction> = (
  state = INITIAL_STATE,
  action: ToastAction,
) => {
  switch (action.idStore) {
    case 'TOAST':
      switch (action.type) {
        // @ts-ignore
        case ToastTypes.ADD_TOAST:
          if (action.toasts) {
            return { ...state, toasts: action.toasts };
          }
        default:
          return state;
      }
    default:
      return state;
  }
};

export default toasts;
