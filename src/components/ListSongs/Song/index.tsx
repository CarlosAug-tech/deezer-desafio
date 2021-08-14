import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { ISong } from '../../../store/modules/Songs/types';

import { Container } from './styles';

interface ISongProps {
  song: ISong;
  handleFavorite: Function;
}

const Song: React.FC<ISongProps> = ({ song, handleFavorite }) => (
  <Container isFavorite={song.isFavorite}>
    <img src={song.album.cover_medium} alt="" />
    <strong>{song.title}</strong>
    <audio src={song.preview} controls />
    <button type="button" onClick={() => handleFavorite(song.id)}>
      {song.isFavorite ? (
        <FaStar size={20} color="#FFD700" />
      ) : (
        <FaRegStar size={20} color="#333" />
      )}
    </button>
  </Container>
);

export default Song;
