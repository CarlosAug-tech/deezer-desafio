import styled, { css } from 'styled-components';

interface IMenuStyleProps {
  miniMenu: boolean;
  isActiveOpt?: boolean;
}

export const Container = styled.header<IMenuStyleProps>`
  z-index: 10;
  max-width: ${(props) => (props.miniMenu ? '78px' : '250px')};
  width: 100%;
  height: 100vh;
  padding: 10px;
  top: 0;
  left: 0;
  position: fixed;
  background: #457b9d;
  transition: max-width 0.4s ease;

  & ~ main {
    margin-left: 78px;
  }
`;

export const Logo = styled.div<IMenuStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  > div:first-child {
    display: flex;
    align-items: center;
    opacity: ${(props) => (props.miniMenu ? '0' : '1')};
    transition: opacity 0.4s;

    img {
      width: 40px;
      height: 40px;
      margin-right: 3px;
    }

    span {
      font-size: 18px;
      color: #fff;
    }

    h3 {
      margin-right: 3px;
      font-size: 22px;
      font-weight: 700;
      color: #fff;
    }
  }
`;

export const Sigla = styled.div<IMenuStyleProps>`
  display: flex;
  align-items: center;

  > svg,
  > span,
  > h3 {
    pointer-events: none;
    opacity: ${(props) => (props.miniMenu ? '0' : '1')};
    transition: opacity 0.4s;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-right: 3px;
    position: relative;
  }

  > span {
    font-size: 18px;
    color: #fff;
  }

  h3 {
    top: 20px;
    left: 18px;
    z-index: 1;
    margin-right: 3px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    position: absolute;
  }
`;

export const MenuBars = styled.div<IMenuStyleProps>`
  left: ${(props) => (props.miniMenu ? '50%' : '88%')};
  position: absolute;
  transform: ${(props) => (props.miniMenu ? 'translateX(-50%)' : '')};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 35px;
    position: relative;
    border: 0;
    background: transparent;

    span {
      width: 100%;
      height: 2px;
      background: #fff;
      transition: all 0.4s ease;
    }

    span:nth-child(1),
    span:nth-child(3) {
      left: 0;
      position: absolute;
    }

    span:nth-child(1) {
      top: 9px;
      transform: ${(props) =>
        props.miniMenu ? '' : 'rotate(45deg) translate(7px, 7px)'};
    }

    span:nth-child(2) {
      ${(props) =>
        !props.miniMenu &&
        css`
          display: none;
        `}
    }

    span:nth-child(3) {
      bottom: 9px;
      transform: ${(props) =>
        props.miniMenu ? '' : 'rotate(-45deg) translate(4px, -4px)'};
    }
  }
`;

export const MenuNav = styled.nav``;

export const MenuUl = styled.ul`
  margin: 10px 0;
`;

export const MenuLi = styled.li<IMenuStyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    > div {
      opacity: 1;
      visibility: visible;
      transform: translateX(105px);
    }
  }

  > div {
    z-index: -1;
    width: 100px;
    padding: 10px;
    position: absolute;
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
    transform: translateX(0);
    transition: all 0.4s ease;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: calc(100% - 29px);
      left: 3px;
      border: 8px solid black;
      border-color: transparent transparent #fff #fff;
      transform-origin: 0 0;
      transform: rotate(45deg);
      box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 12%);
    }
  }

  ${(props) =>
    props.miniMenu &&
    css`
      align-items: center;
      justify-content: center;
    `}

  a {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin: 10px 0;
    color: ${(props) => (props.isActiveOpt ? '#a8dadc' : '#fff')};
    position: relative;
    transition: all 0.4s ease;

    div {
      margin-right: ${(props) => (props.miniMenu ? '0' : '10px')};

      svg {
        transition: all 0.4s ease;
      }
    }

    span {
      left: ${(props) => (props.miniMenu ? '0' : '50px')};
      position: absolute;
      opacity: ${(props) => (props.miniMenu ? '0' : '1')};
      transition: all 0.4s ease;
    }

    &:hover {
      border-radius: 10px;
      color: #333;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

      svg {
        color: #333;
      }
    }

    ${(props) =>
      props.miniMenu &&
      css`
        width: 40px;
      `}
  }
`;
