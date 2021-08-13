export enum SongStore {
  ID_STORE = 'SONGS',
}

export enum SongTypes {
  LIST_SONGS = 'LIST_SONGS',
  CLEAN_LIST_SONGS = 'CLEAN_LIST_SONGS',
  SEARCH_SONG = 'SEARCH_SONG',
  LIST_FAVORITES_SONGS = 'LIST_FAVORITES_SONGS',
}

export type SongAction = {
  idStore: SongStore.ID_STORE;
  type: SongTypes;
  songs?: ISong[];
  search?: ISearchSong;
  songsFavorites?: ISong[];
};

export interface SongState {
  songs: ISong[];
  search: ISearchSong;
  songsFavorites: ISong[];
}

export interface ISong {
  id: string;
  album: {
    cover_medium: string;
  };
  artist: {
    name: string;
  };
  title: string;
  duration: string | number;
  preview: string;
  link: string;
  isFavorite?: boolean;
}

export interface ISearchSong {
  searchText: string;
}
