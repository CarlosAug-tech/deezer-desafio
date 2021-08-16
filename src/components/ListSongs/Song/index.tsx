import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { ISong } from '../../../store/modules/Songs/types';

import { Container } from './styles';

interface ISongProps {
  song: ISong;
  handleFavorite: Function;
}

const Song: React.FC<ISongProps> = ({ song, handleFavorite }) => (
  <Container isFavorite={song.isFavorite}>
    <div>
      <img src={song.album.cover_medium} alt="" />
      <div>
        <span>
          <b>Artista:</b> {song.artist.name}{' '}
        </span>
        <small>
          Duração:{' '}
          {new Date(Number(song.duration) * 1000).toISOString().substr(11, 8)}
        </small>
        <a href={`${song.link}`} target="_blank" rel="noreferrer">
          Acesse a música completa
        </a>
      </div>
    </div>
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
