import { Reducer } from 'redux';
import { SongAction, SongState, SongTypes } from './types';

const INITIAL_STATE: SongState = {
  songs: [],
  search: {
    searchText: '',
  },
  songsFavorites: [],
};

const songs: Reducer<SongState, SongAction> = (
  state = INITIAL_STATE,
  action: SongAction,
): any => {
  switch (action.idStore) {
    case 'SONGS':
      switch (action.type) {
        // @ts-ignore
        case SongTypes.LIST_SONGS:
          if (action.songs) {
            return { ...state, songs: action.songs };
          }
        // @ts-ignore
        case SongTypes.CLEAN_LIST_SONGS:
          return { ...state, songs: INITIAL_STATE.songs };
        // @ts-ignore
        case SongTypes.SEARCH_SONG:
          if (action.search) {
            return { ...state, search: action.search };
          }
        // @ts-ignore
        case SongTypes.LIST_FAVORITES_SONGS:
          if (action.songsFavorites) {
            return { ...state, songsFavorites: action.songsFavorites };
          }
        default:
          return state;
      }
    default:
      return state;
  }
};

export default songs;
