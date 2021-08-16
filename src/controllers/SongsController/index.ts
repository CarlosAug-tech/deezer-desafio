import { uuid } from 'uuidv4';
import api from '../../services/api';
import store from '../../store';
import * as actions from '../../store/modules/Songs/actions';
import { ISong } from '../../store/modules/Songs/types';
import { addToast } from '../ToastController';

export async function getSongs(
  amountIndex: number,
  amountSongsPage: number,
  setLoading: Function,
) {
  await api
    .get(`/chart/0/tracks?index=${amountIndex}&limit=${amountSongsPage}`)
    .then((response) => {
      const {
        songs: { songs },
      } = store.getState();
      const dataFavoritesStorage = localStorage.getItem('SongsFavorites:');
      let dataParseStorage: ISong[] = [];
      if (dataFavoritesStorage) {
        dataParseStorage = JSON.parse(dataFavoritesStorage);
      }
      const newArray: ISong[] = response.data.data.map((i: ISong) => ({
        id: i.id,
        title: i.title,
        duration: i.duration,
        album: {
          cover_medium: i.album.cover_medium,
        },
        artist: {
          name: i.artist.name,
        },
        preview: i.preview,
        link: i.link,
        isFavorite: false,
      }));
      newArray.forEach((item) => {
        dataParseStorage.forEach((teste) => {
          if (item.id === teste.id) {
            // @ts-ignore
            item.isFavorite = true;
          }
        });
      });
      actions.setSongs([...songs, ...newArray]);
      setLoading(false);
      const id = uuid();
      if (newArray.length > 0) {
        addToast({
          id,
          title: 'Busca relizada com sucesso!',
          type: 'success',
        });
      } else {
        addToast({
          id,
          title: 'Não foi encontrado nenhum registro!',
          type: 'error',
        });
      }
    })
    .catch((response) => {
      const id = uuid();
      return addToast({
        id,
        title: 'Houve uma falha ao relizar a busca!',
        type: 'error',
      });
    });
}

export async function getSeacrhSong(
  searchText: string,
  amountIndexSearch: number,
  setLoading: Function,
) {
  if (amountIndexSearch === 0) {
    await actions.cleanListSongs();
  }
  await api
    .get(`/search?q=${searchText}&index=${amountIndexSearch}`)
    .then((response) => {
      const {
        songs: { songs },
      } = store.getState();
      const dataFavoritesStorage = localStorage.getItem('SongsFavorites:');
      let dataParseStorage: ISong[] = [];
      if (dataFavoritesStorage) {
        dataParseStorage = JSON.parse(dataFavoritesStorage);
      }
      const newArray: ISong[] = response.data.data.map((i: ISong) => ({
        id: i.id,
        title: i.title,
        duration: i.duration,
        album: {
          cover_medium: i.album.cover_medium,
        },
        artist: {
          name: i.artist.name,
        },
        preview: i.preview,
        link: i.link,
        isFavorite: false,
      }));
      newArray.forEach((item) => {
        dataParseStorage.forEach((teste) => {
          if (item.id === teste.id) {
            // @ts-ignore
            item.isFavorite = true;
          }
        });
      });
      actions.setSongs([...songs, ...newArray]);
      setLoading(false);
      const id = uuid();
      if (newArray.length > 0) {
        addToast({
          id,
          title: 'Busca relizada com sucesso!',
          type: 'success',
        });
      } else {
        addToast({
          id,
          title: 'Não foi encontrado nenhum registro!',
          type: 'error',
        });
      }
    })
    .catch((response) => {
      const id = uuid();
      return addToast({
        id,
        title: 'Houve uma falha ao relizar a busca!',
        type: 'error',
      });
    });
}

export async function addFavoriteSong(id: number, favorites?: boolean) {
  const {
    songs: { songs, songsFavorites },
  } = store.getState();
  const musicExists = favorites
    ? songsFavorites.find((i) => Number(i.id) === id && i)
    : songs.find((i) => Number(i.id) === id && i);

  if (musicExists?.isFavorite) {
    const filterArrFavorite = songsFavorites.filter(
      (i) => Number(i.id) !== id && i,
    );
    const songsFav = songs.map((i) =>
      Number(i.id) === id && i ? { ...i, isFavorite: false } : i,
    );
    actions.setSongs(songsFav);
    actions.setSongsFavorites(filterArrFavorite);
    localStorage.setItem('SongsFavorites:', JSON.stringify(filterArrFavorite));
    const idUuid = uuid();
    addToast({
      id: idUuid,
      title: 'Música removida da lista de Favoritos com sucesso!!',
      type: 'success',
    });
  } else {
    const filterArrFavorite = songs.filter((i) => Number(i.id) === id && i);
    // @ts-ignore
    const newArrFavorite: ISong[] = filterArrFavorite.map(
      (i) => !i.isFavorite && { ...i, isFavorite: true },
    );
    const songsFav = songs.map((i) =>
      Number(i.id) === id && i ? { ...i, isFavorite: true } : i,
    );
    actions.setSongs(songsFav);
    actions.setSongsFavorites([...songsFavorites, ...newArrFavorite]);
    localStorage.setItem(
      'SongsFavorites:',
      JSON.stringify([...songsFavorites, ...newArrFavorite]),
    );
    const idUuid = uuid();
    addToast({
      id: idUuid,
      title: 'Música adicionada na lista de Favoritos com sucesso!!',
      type: 'success',
    });
  }
}

export async function getSearchSongFavorites(searchText: string) {
  const dataFavoritesStorage = localStorage.getItem('SongsFavorites:');
  let dataParseStorage: ISong[] = [];
  if (dataFavoritesStorage) {
    dataParseStorage = JSON.parse(dataFavoritesStorage);
  }

  const newArr = dataParseStorage.filter(
    (song) =>
      song.artist.name.toLowerCase().includes(searchText.toLowerCase()) ||
      song.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  actions.setSongsFavorites(newArr);
  const id = uuid();
  if (newArr.length > 0) {
    addToast({
      id,
      title: 'Busca relizada com sucesso!',
      type: 'success',
    });
  } else {
    addToast({
      id,
      title: 'Não foi encontrado nenhum registro!',
      type: 'error',
    });
  }
}
