import React from 'react';
import ListSongs from '../../components/ListSongs';

const Favorites: React.FC = () => (
  <main>
    <ListSongs favorites />
  </main>
);

export default Favorites;
