import React from 'react';
import { FiStar } from 'react-icons/fi';
import { ISong } from '../../../store/modules/Songs/types';

import { Container } from './styles';

interface ISongProps {
  song: ISong;
  handleFavorite: Function;
}

const Song: React.FC<ISongProps> = ({ song, handleFavorite }) => (
  <Container>
    <img src={song.album.cover_medium} alt="" />
    <strong>{song.title}</strong>
    <audio src={song.preview} controls />
    <button type="button" onClick={() => handleFavorite(song.id)}>
      <FiStar color={song.isFavorite ? 'red' : '#333'} />
    </button>
  </Container>
);

export default Song;
