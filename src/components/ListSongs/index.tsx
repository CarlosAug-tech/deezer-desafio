import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ISearchSong, ISong } from '../../store/modules/Songs/types';
import { AppState } from '../../store/storeTypes';

import * as actions from '../../store/modules/Songs/actions';
import * as controllerSongs from '../../controllers/SongsController';

import { Container, Content } from './styles';
import Song from './Song';
import Loading from '../Loading';

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
    setLoading(true);
    if (search.searchText === '') {
      setTimeout(() => {
        controllerSongs.getSongs(amountIndex, amountSongsPage);
        setLoading(false);
      }, 3000);
    } else {
      setTimeout(() => {
        controllerSongs.getSeacrhSong(search.searchText, amountIndexSearch);
        setLoading(false);
      }, 3000);
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
    console.log('entrou');
  };

  return (
    <Container>
      <Content>
        {favorites ? (
          <>
            {dataSongsFavorites.length === 0 ? (
              <Loading loading={loading} />
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
              <Loading loading={loading} />
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
                  (amountIndexSearch >= amountSongsPageSearch && loading)) && (
                  <Loading loading={loading} />
                )}
              </>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default ListSongs;
