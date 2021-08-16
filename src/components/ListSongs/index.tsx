import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ISearchSong, ISong } from '../../store/modules/Songs/types';
import { AppState } from '../../store/storeTypes';

import * as actions from '../../store/modules/Songs/actions';
import * as controllerSongs from '../../controllers/SongsController';

import Song from './Song';
import Loading from '../Loading';
import { IToast } from '../../store/modules/Toasts/types';
import Toast from '../Toast';

import { Container, Content } from './styles';

interface IListSongsProps {
  favorites?: boolean;
}

const ListSongs: React.FC<IListSongsProps> = ({ favorites }) => {
  const dataSongs = useSelector<AppState, ISong[]>(
    (state) => state.songs.songs,
  );
  const search = useSelector<AppState, ISearchSong>(
    (state) => state.songs.search,
  );
  const dataSongsFavorites = useSelector<AppState, ISong[]>(
    (state) => state.songs.songsFavorites,
  );
  const toasts = useSelector<AppState, IToast[]>(
    (state) => state.toasts.toasts,
  );

  const [loading, setLoading] = useState(false);
  const [amountIndex, setAmountIndex] = useState(0);
  const [amountSongsPage] = useState(10);

  const [amountIndexSearch, setAmountIndexSearch] = useState(0);
  const [amountSongsPageSearch] = useState(25);

  useEffect(() => {
    const data = localStorage.getItem('SongsFavorites:');
    if (data) {
      actions.setSongsFavorites(JSON.parse(data));
    }
    if (dataSongs.length > 0) {
      actions.cleanListSongs();
      setAmountIndex(0);
    }
  }, []);

  useEffect(() => {
    if (favorites && search.searchText === '') {
      const data = localStorage.getItem('SongsFavorites:');
      if (data) {
        actions.setSongsFavorites(JSON.parse(data));
      }
    }
  }, [search.searchText]);

  useEffect(() => {
    setLoading(true);
    if (!favorites) {
      if (search.searchText === '') {
        setTimeout(() => {
          controllerSongs.getSongs(amountIndex, amountSongsPage, setLoading);
        }, 3000);
      } else {
        setTimeout(() => {
          controllerSongs.getSeacrhSong(
            search.searchText,
            amountIndexSearch,
            setLoading,
          );
        }, 3000);
      }
    } else {
      controllerSongs.getSearchSongFavorites(search.searchText);
      setLoading(false);
    }
  }, [amountIndex, search.searchText, amountIndexSearch]);

  const handleScroll = () => {
    if (loading) {
      return;
    }

    if (
      window.innerHeight + Math.ceil(document.documentElement.scrollTop) >=
      document.documentElement.scrollHeight
    ) {
      if (search.searchText === '') {
        setAmountIndex(amountIndex + amountSongsPage);
      } else {
        setAmountIndexSearch(amountIndexSearch + amountSongsPageSearch);
      }
    }
  };

  useEffect(() => {
    if (!favorites) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleFavorite = (id: number) => {
    controllerSongs.addFavoriteSong(id, favorites);
  };

  return (
    <>
      <Container>
        <Content>
          {favorites ? (
            <>
              {dataSongsFavorites.length === 0 ? (
                <>
                  {loading ? (
                    <Loading loading={loading} />
                  ) : (
                    <h3>Não foi encontrado nenhum registro!</h3>
                  )}
                </>
              ) : (
                <>
                  {dataSongsFavorites.length > 0 &&
                    dataSongsFavorites.map((song) => (
                      <Song
                        key={song.id}
                        song={song}
                        handleFavorite={handleFavorite}
                      />
                    ))}
                </>
              )}
            </>
          ) : (
            <>
              {dataSongs.length === 0 ? (
                <>
                  {loading ? (
                    <Loading loading={loading} />
                  ) : (
                    <h3>Não foi encontrado nenhum registro!</h3>
                  )}
                </>
              ) : (
                <>
                  {dataSongs.length > 0 &&
                    dataSongs.map((song) => (
                      <Song
                        key={song.id}
                        song={song}
                        handleFavorite={handleFavorite}
                      />
                    ))}
                  {((amountIndex >= amountSongsPage && loading) ||
                    (amountIndexSearch >= amountSongsPageSearch &&
                      loading)) && <Loading loading={loading} />}
                </>
              )}
            </>
          )}
        </Content>
      </Container>
      {toasts && <Toast toasts={toasts} />}
    </>
  );
};

export default ListSongs;
