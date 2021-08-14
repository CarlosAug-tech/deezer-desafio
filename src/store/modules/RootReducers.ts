import { combineReducers } from 'redux';

import songs from './Songs/index';
import toasts from './Toasts/index';

export default combineReducers({
  songs,
  toasts,
});
