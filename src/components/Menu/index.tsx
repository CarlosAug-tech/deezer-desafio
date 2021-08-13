import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';

import { FiHexagon } from 'react-icons/fi';
import {
  Container,
  Logo,
  MenuBars,
  MenuLi,
  MenuNav,
  MenuUl,
  Sigla,
} from './styles';
import SearchMenu from '../SearchMenu';

interface IComplementsProps {
  logo?: string;
  sigla?: string;
  name: string;
}

interface IOptionsProps {
  title: string;
  path: string;
  Icon: React.ComponentType<IconBaseProps>;
  isActiveOpt?: boolean;
}

export interface IMenuProps {
  complements: IComplementsProps;
  options: IOptionsProps[];
}

const Menu: React.FC<IMenuProps> = ({ complements, options }) => {
  const [dataOptions, setDataOptions] = useState<IOptionsProps[]>(options);
  const [miniMenu, setMiniMenu] = useState(true);

  const { pathname } = useLocation();

  const loadOptions = useCallback(async () => {
    setDataOptions((state) =>
      state.map((option) =>
        option.path === pathname
          ? { ...option, isActiveOpt: true }
          : { ...option, isActiveOpt: false },
      ),
    );
  }, [pathname]);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  const handleChangeMenu = useCallback(() => {
    setMiniMenu(!miniMenu);
  }, [miniMenu]);

  return (
    <Container data-testid="menuContainer" miniMenu={miniMenu}>
      {complements && complements.logo ? (
        <Logo miniMenu={miniMenu}>
          <div>
            <img src={complements.logo} alt={complements.sigla} />
            <span>{complements.name}</span>
          </div>
          <MenuBars miniMenu={miniMenu}>
            <button
              data-testid="btn-changeMenu"
              type="button"
              onClick={handleChangeMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </MenuBars>
        </Logo>
      ) : (
        <Sigla miniMenu={miniMenu}>
          <FiHexagon size={35} color="#fff" />
          <h3>{complements.sigla}</h3>
          <span>{complements.name}</span>
          <MenuBars miniMenu={miniMenu}>
            <button type="button" onClick={handleChangeMenu}>
              <span />
              <span />
              <span />
            </button>
          </MenuBars>
        </Sigla>
      )}
      <MenuNav>
        <SearchMenu miniMenu={miniMenu} setMiniMenu={setMiniMenu} />
        <MenuUl>
          {dataOptions.map((option) => (
            <MenuLi
              miniMenu={miniMenu}
              key={option.title}
              isActiveOpt={option.isActiveOpt}
            >
              <Link to={option.path}>
                <div>
                  <option.Icon size={20} />
                </div>
                <span>{option.title}</span>
              </Link>
              {miniMenu && (
                <div>
                  <span>{option.title}</span>
                </div>
              )}
            </MenuLi>
          ))}
        </MenuUl>
      </MenuNav>
    </Container>
  );
};

export default Menu;
