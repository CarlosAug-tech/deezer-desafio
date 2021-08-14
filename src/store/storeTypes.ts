import { SongState } from './modules/Songs/types';
import { ToastState } from './modules/Toasts/types';

export interface AppState {
  songs: SongState;
  toasts: ToastState;
}
