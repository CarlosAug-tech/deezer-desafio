import { createStore, Store } from 'redux';
import RootReducers from './modules/RootReducers';
import { AppState } from './storeTypes';

const store: Store<AppState> = createStore(RootReducers);

export default store;
