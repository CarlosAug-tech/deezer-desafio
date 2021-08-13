import React from 'react';
import { FiHome, FiStar } from 'react-icons/fi';
import Menu, { IMenuProps } from '../../../components/Menu';

import { Container } from './styles';

const menu: IMenuProps = {
  complements: {
    name: 'DeezerSong',
    logo: '',
    sigla: 'DZ',
  },
  options: [
    {
      title: 'Home',
      path: '/',
      Icon: FiHome,
    },
    {
      title: 'Favoritos',
      path: '/favoritos',
      Icon: FiStar,
    },
  ],
};

const DefaultLayout: React.FC = ({ children }) => (
  <Container>
    <Menu complements={menu.complements} options={menu.options} />
    {children}
  </Container>
);

export default DefaultLayout;
