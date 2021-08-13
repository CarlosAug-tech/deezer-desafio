import React from 'react';
import { FiSearch } from 'react-icons/fi';

import * as actions from '../../store/modules/Songs/actions';

import { Container } from './styles';

interface IMenuSearchProps {
  miniMenu: boolean;
  setMiniMenu: Function;
}

const SearchMenu: React.FC<IMenuSearchProps> = ({ miniMenu, setMiniMenu }) => (
  <Container miniMenu={miniMenu}>
    <input
      type="text"
      placeholder=" "
      onFocus={() => setMiniMenu(false)}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' &&
        (actions.cleanListSongs(),
        actions.setSearchSong({ searchText: e.currentTarget.value }))
      }
    />
    <label htmlFor="">Pesquisar..</label>
    <FiSearch />
  </Container>
);

export default SearchMenu;
