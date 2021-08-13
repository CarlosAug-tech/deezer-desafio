import store from '../..';
import { ISearchSong, ISong, SongAction, SongStore, SongTypes } from './types';

export const setSongs = (songs: ISong[]) =>
  store.dispatch<SongAction>({
    idStore: SongStore.ID_STORE,
    type: SongTypes.LIST_SONGS,
    songs,
  });

export const cleanListSongs = () =>
  store.dispatch<SongAction>({
    idStore: SongStore.ID_STORE,
    type: SongTypes.CLEAN_LIST_SONGS,
  });

export const setSearchSong = (search: ISearchSong) =>
  store.dispatch<SongAction>({
    idStore: SongStore.ID_STORE,
    type: SongTypes.SEARCH_SONG,
    search,
  });

export const setSongsFavorites = (songsFavorites: ISong[]) =>
  store.dispatch<SongAction>({
    idStore: SongStore.ID_STORE,
    type: SongTypes.LIST_FAVORITES_SONGS,
    songsFavorites,
  });
